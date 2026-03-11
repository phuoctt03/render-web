self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("render-web-app-cache").then(cache => {
      return cache.addAll([
        "./render-web/",
        "./render-web/index.html",
        "./render-web/manifest.json",
        "./render-web/rendering.png",
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
