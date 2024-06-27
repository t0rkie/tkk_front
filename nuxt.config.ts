// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  // nitro: {
  //   preset: 'static',
  // },
  css: [
    '@/assets/styles/style.css',
    '@/assets/styles/_common.css',
  ],
})
