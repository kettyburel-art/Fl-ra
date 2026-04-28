// ===========================================
// FLŌRA — Service Worker v2.1
// Stratégie : Network First pour les fichiers critiques (HTML/JS/CSS)
//             + Cache First pour les fonts et icônes
// ===========================================

// IMPORTANT : utilise Date.now() pour invalider le cache à chaque déploiement
const CACHE_NAME = 'flora-cache-v' + Date.now();

// Fichiers critiques à mettre en cache
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './flora_modals.css',
  './app.js',
  './flora_complements.js',
  './flora_interactions.js',
  './manifest.json',
  './icon.svg'
];

// Fichiers ignorés du cache (toujours network)
const SKIP_CACHE = [
  '/api/',
  'analytics',
  'plausible.io',
  'stripe',
  'sumup'
];

// === INSTALL ===
self.addEventListener('install', event => {
  console.log('[SW] Install', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching core assets');
        return cache.addAll(CORE_ASSETS).catch(err => {
          console.warn('[SW] Some core assets failed to cache:', err);
          // Continue malgré tout
        });
      })
      .then(() => self.skipWaiting())
  );
});

// === ACTIVATE ===
self.addEventListener('activate', event => {
  console.log('[SW] Activate', CACHE_NAME);
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k.startsWith('flora-cache-'))
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// === FETCH ===
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Ne pas intercepter les requêtes non-GET ni externes (Plausible, Stripe, etc.)
  if (event.request.method !== 'GET') return;
  if (SKIP_CACHE.some(skip => event.request.url.includes(skip))) return;
  
  // === Cache First pour les fonts Google ===
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }
  
  // === Network First pour le reste (HTML/JS/CSS de l'app) ===
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mettre en cache si OK
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Fallback sur le cache si réseau indisponible
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Pour les requêtes HTML, fallback sur index.html
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
          // Sinon erreur 503
          return new Response('Hors ligne', { 
            status: 503, 
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
          });
        });
      })
  );
});

// === MESSAGE (pour forcer une mise à jour depuis l'app) ===
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
