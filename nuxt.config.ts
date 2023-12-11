// https://v3.nuxtjs.org/api/configuration/nuxt.config ---
export default defineNuxtConfig({
  // target: "static",
  ssr: false,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  //experimental.payloadExtraction = false
  css: ["~/assets/css/main.css"],

  pwa: {
    meta: {
      author: "Balint Korosi",
    },
    manifest: {
      name: "Can I Compost It?",
      lang: "en",
      display: "standalone",
      description:
        "The fastest way to find out if you can put something in your home composting bin.",
    },
  },

  app: {
    head: {
      title:
        "Compostable Item Database | 400+ Items Listed | CanICompostIt.com",
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
            "Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>",
        },
        {
          property: "og:title",
          content:
            "Compostable Item Database | 400+ Items Listed | CanICompostIt.com",
        },
        {
          property: "og:description",
          content:
            "Find out if your waste is compostable with our comprehensive searchable database of 400+ items. Check now at CanICompostIt.com >>",
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
      script: [
        {
          async: true,
          defer: true,
          src: "https://umami-anal.vercel.app/script.js",
          "data-website-id": "d96c24e2-7dfb-409a-a87d-64b901c823dd",
        },
      ],

      // link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }]
    },
  },
  buildModules: ["@nuxtjs/pwa"],
  build: {
    transpile: ["nuxt-img"],
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    domains: ["googleusercontent.com"],
  },
  // generate: { routes: ['/items'] },
});
