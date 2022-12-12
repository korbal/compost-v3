import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGtm({
    id: 'GTM-P63S7PJ',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: true,
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false,

  }))
})