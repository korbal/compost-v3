// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'server',
  ssr: true,

  modules: ['@nuxtjs/tailwindcss']
  //experimental.payloadExtraction = false
})
