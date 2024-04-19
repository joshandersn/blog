export default defineNuxtConfig({
  app: {
    baseURL: '/blog/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/ui"],
  colorMode: {
    preference: 'light'
  }
})