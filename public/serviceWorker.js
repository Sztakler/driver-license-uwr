const CACHE_NAME = "my-site-cache-v2";
const urlsToCache = [
	"/",
	"/public/index.html",
	"/src/output.css",
	"/src/index.js",
	"/src/App.js",
];

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response;
			}

			return fetch(event.request).then(function (response) {
				// Check if we received a valid response
				if (!response || response.status !== 200 || response.type !== "basic") {
					return response;
				}

				// Clone the response to store it in the cache
				const responseToCache = response.clone();

				caches.open(CACHE_NAME).then(function (cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
