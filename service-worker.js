self.addEventListener('install', function(event) {
  console.warn('one')
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.warn('two')
      return cache.addAll([
        '/css/bootstrap.css',
        '/css/main.css',
        '/js/bootstrap.min.js',
        '/js/jquery.min.js',
        '/offline.html',
      ])
    })
  )
})
