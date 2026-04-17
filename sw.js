/* ============================
   FLŌRA — Service Worker
   Cache-first strategy
   Version 1.0
   ============================*/

const CACHE_NAME = 'flora-v1.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap'
];

// ============================
// INSTALL — mise en cache
// ============================
self.addEventListener('install', event => {
  console.log('[SW] Installation…');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache des assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// ============================
// ACTIVATE — nettoyage anciens caches
// ============================
self.addEventListener('activate', event => {
  console.log('[SW] Activation…');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Suppression ancien cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ============================
// FETCH — stratégie Cache First
// ============================
self.addEventListener('fetch', event => {
  // Ignore les requêtes non GET
  if (event.request.method !== 'GET') return;

  // Ignore les requêtes chrome-extension
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Retourne le cache, met à jour en arrière-plan
          event.waitUntil(updateCache(event.request));
          return cachedResponse;
        }

        // Pas en cache : fetch réseau
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type === 'opaque') {
              return response;
            }
            // Met en cache la nouvelle réponse
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => {
            // Offline fallback pour les pages HTML
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('./index.html');
            }
          });
      })
  );
});

async function updateCache(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response);
    }
  } catch (e) {
    // Pas de réseau, on garde le cache
  }
}

// ============================
// PUSH NOTIFICATIONS (base)
// ============================
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title   = data.title   || 'Flōra';
  const options = {
    body:    data.body    || 'Rappel bien-être',
    icon:    './icons/icon-192.png',
    badge:   './icons/icon-192.png',
    vibrate: [200, 100, 200],
    data:    { url: data.url || './' }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || './')
  );
});
