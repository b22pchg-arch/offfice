/* VBA Reader Offline PWA Service Worker - desktop layout fix */
const CACHE_NAME = 'vba-reader-offline-2026-06-03-08-desktop-mobile';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192.svg'
];

async function cacheAppShell(){
  const cache = await caches.open(CACHE_NAME);
  for (const url of APP_SHELL) {
    try {
      const req = new Request(url, { cache: 'reload' });
      const res = await fetch(req);
      if (res && res.ok) await cache.put(url, res.clone());
    } catch (err) {
      // Giữ các file đã cache được; không làm hỏng quá trình cài nếu một icon không tải được.
      console.warn('[SW] Không cache được', url, err);
    }
  }
}

self.addEventListener('install', event => {
  event.waitUntil(cacheAppShell());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const fallback = await cache.match('./index.html');
      if (req.mode === 'navigate' && fallback) return fallback;
      throw err;
    }
  })());
});
