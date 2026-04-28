// Flōra Service Worker — v2.1 (force update)
const CACHE_VERSION = 'flora-v' + Date.now(); // Version unique à chaque déploiement
const CACHE_NAME = 'flora-cache-v2';

const CORE_ASSETS = [
  '/Fl-ra/',
  '/Fl-ra/index.html',
  '/Fl-ra/app.js',
  '/Fl-ra/style.css',
  '/Fl-ra/manifest.json'
];

// Install — pré-cache des fichiers critiques
self.addEventListener('install', function(event) {
  console.log('[SW] Install', CACHE_VERSION);
  self.skipWaiting(); // Force l'activation immédiate
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CORE_ASSETS);
    }).catch(function(err) {
      console.warn('[SW] Cache install failed:', err);
    })
  );
});

// Activate — supprime les anciens caches
self.addEventListener('activate', function(event) {
  console.log('[SW] Activate', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) {
              console.log('[SW] Deleting old cache:', k);
              return caches.delete(k);
            })
      );
    }).then(function() {
      return self.clients.claim(); // Prend contrôle immédiat de toutes les pages
    })
  );
});

// Fetch — Network First pour app.js, index.html, style.css
// Cache First pour les autres assets
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  const url = event.request.url;
  const isCriticalAsset = url.includes('app.js') ||
                          url.includes('index.html') ||
                          url.includes('style.css') ||
                          url.endsWith('/Fl-ra/') ||
                          url.endsWith('/Fl-ra');

  if (isCriticalAsset) {
    // Network First : on prend toujours la version réseau si dispo
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Cloner pour pouvoir mettre en cache + retourner
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, cloned);
          });
          return response;
        })
        .catch(function() {
          // Si offline, fallback sur le cache
          return caches.match(event.request);
        })
    );
  } else {
    // Cache First pour le reste (images, fonts, etc.)
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        return cached || fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, cloned);
            });
          }
          return response;
        });
      })
    );
  }
});

// Message — permet à l'app de forcer un skipWaiting
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
