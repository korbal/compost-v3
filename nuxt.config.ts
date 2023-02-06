import { MiddlewareKey } from "./.nuxt/types/middleware.d";
// https://v3.nuxtjs.org/api/configuration/nuxt.config ---
export default defineNuxtConfig({
  target: "static",
  //ssr: true,

  modules: ["@nuxtjs/tailwindcss"],
  //experimental.payloadExtraction = false
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Can I Compost It?",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          name: "description",
          content:
            "Quickly find out what items you can throw in your home compost bin. No more guesswork or confusing lists – just simple, straightforward answers.",
        },
        {
          property: "og:title",
          content: "Can I Compost It?",
        },
        {
          property: "og:description",
          content:
            "Quickly find out what items you can throw in your home compost bin. No more guesswork or confusing lists – just simple, straightforward answers.",
        },
        {
          property: "og:image",
          content: "https://canicompostit.com/assets/img/og-image.png",
        },
        {
          property: "og:url",
          content: "https://canicompostit.com",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./favicon.ico",
        },
      ],

      // link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }]
    },
  },
  buildModules: ["@nuxtjs/pws"],
  // generate: { routes: ['/items'] },
});
