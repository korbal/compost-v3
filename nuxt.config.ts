// https://v3.nuxtjs.org/api/configuration/nuxt.config --
export default defineNuxtConfig({
  target: 'static',
  //ssr: true,

  modules: ['@nuxtjs/tailwindcss'],
  //experimental.payloadExtraction = false
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Can I Compost it?',
      meta: [{
        name: 'description', content: 'Quickly find out what items you can throw in your home compost bin. No fluff, try it now!'
      }],
      link: [{ rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/favicon.ico' }],

      // link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }]
    }
  }
  // generate: { routes: ['/items'] },
})