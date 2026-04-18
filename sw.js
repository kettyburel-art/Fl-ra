// Flōra Service Worker — v2.0
// Cache auto-invalidé à chaque nouvelle version (changer CACHE_VERSION suffit)
const CACHE_VERSION = 'flora-v2.0';
const CACHE_NAME = CACHE_VERSION;

// Fichiers à mettre en cache pour le mode hors-ligne
const STATIC_FILES = [
  '/Fl-ra/',
  '/Fl-ra/index.html',
  '/Fl-ra/app.js',
  '/Fl-ra/style.css',
  '/Fl-ra/manifest.json',
  '/Fl-ra/icon.svg',
];

// ── Installation : mise en cache des fichiers statiques ──
self.addEventListener('install', event => {
  console.log('[SW] Install', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_FILES))
      .then(() => self.skipWaiting()) // Activer immédiatement sans attendre
  );
});

// ── Activation : supprimer les anciens caches ──
self.addEventListener('activate', event => {
  console.log('[SW] Activate', CACHE_NAME);
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME) // Supprimer tous les anciens
          .map(name => {
            console.log('[SW] Suppression ancien cache:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim()) // Prendre le contrôle immédiatement
  );
});

// ── Stratégie Network-First avec fallback cache ──
// Essaie le réseau d'abord, cache en cas d'échec (hors-ligne)
self.addEventListener('fetch', event => {
  // Ignorer les requêtes non-GET et les APIs externes
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.origin.includes('github.io') && !url.origin.includes('localhost')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mettre à jour le cache avec la nouvelle version
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Hors-ligne → servir depuis le cache
        return caches.match(event.request)
          .then(cached => cached || caches.match('/Fl-ra/index.html'));
      })
  );
});

// ── Notifications push (si supportées) ──
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Flōra 🌿', {
      body: data.body || '',
      icon: '/Fl-ra/icon.svg',
      badge: '/Fl-ra/icon.svg',
      tag: data.tag || 'flora',
      renotify: false,
    })
  );
});

// ── Clic sur une notification → ouvrir l'app ──
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Si l'app est déjà ouverte, la mettre au premier plan
        const floraClient = clientList.find(c => c.url.includes('Fl-ra'));
        if (floraClient) return floraClient.focus();
        return clients.openWindow('/Fl-ra/');
      })
  );
});
