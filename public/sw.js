let cacheData = "Oflinedata";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cachee) => {
      cachee.addAll([
        
        // "/index.html",
        // "/",
        // "/favicon.ico",
        // "/manifest.json",
        // "/static/js/bundle.js",
        // "/static/js/1.chunk.js",
        // "/static/js/main.chunk.js",
        // "/main.dad3d0c82c1cf9a59f8c.hot-update.js",
        // "/logo192.png",
        // "/firebasejs/3.5.0/firebase-app.js",
        // "/static/js/0.chunk.js",
        // "/css?family=Lato&display=swap"
      
        
        
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) return result;
    })
  );
});
