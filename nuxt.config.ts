// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
  ],
  css: ["@/assets/styles/main.css"],
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
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      // ripple: true,
      theme: {
        preset: Aura,
      },
      pt: {
        button: {
          // root: "bg-transparent",
        },
      },
    },
    // cssLayerOrder: 'tailwind-base,primevue, tailwind-utilities',
    components: {
      // include: "*",
      // exclude: ["Galleria", "Carousel", "Chart", "Editor"],
      prefix: "Prime",
    },
  },
});
