// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["@/assets/css/main.css"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: [
      {
        code: "en",
        iso: "en-US",
        countryName: "England",
        logo: "/img/logo_country/england.svg",
      },
      {
        code: "fa",
        iso: "fa-IR",
        countryName: "Iran",
        logo: "/img/logo_country/iran.svg",
      },
    ],
    defaultLocale: process.env.APP_LOCALE,
  },
  runtimeConfig: {
    public: {
      APP_LOCALE: process.env.APP_LOCALE,
      // i18n: {
      //   baseUrl: 'https://example.com',
      //   experimental: {
      //     jsTsFormatResource: true,
      //   },
      //   locales: {},
      //   // other options ...
      // }
    },
  },
});
