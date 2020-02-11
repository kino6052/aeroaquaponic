self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(function(cache) {
      return cache.addAll([
        '/images/Aeroaquaponic - Unplugging from Consumerism.pdf',
        '/images/Diagonals.svg',
        '/images/dima.jpg',
        '/images/dima.png',
        '/images/facebook.png',
        '/images/favicon.png',
        '/images/graphic.png',
        '/images/graphic.svg',
        '/images/grass-fb.png',
        '/images/Grass.png',
        '/images/instagram.png',
        '/images/kickstarter.png',
        '/images/kirill.jpg',
        '/images/linkedin.png',
        '/images/logo.png',
        '/images/Mobile.svg',
        '/images/tech-cover.png',
        '/images/twitter.png',
        '/images/vision-cover.png',
        '/images/youtube.png',
      ])
    })
  )
})
