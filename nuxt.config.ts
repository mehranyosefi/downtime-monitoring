// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "shortcut icon",
          as: "image",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      // <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
    "@nuxt/test-utils/module",
    "nuxt-lazy-hydrate",
  ],
  css: ["@/assets/styles/main.css", "@/assets/styles/main.scss"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: [
      {
        code: "fa",
        iso: "fa-IR",
        countryName: "Iran",
        logo: "/img/logo_country/iran.svg",
      },
      {
        code: "en",
        iso: "en-US",
        countryName: "England",
        logo: "/img/logo_country/england.svg",
      },
    ],
    defaultLocale: process.env.NUXT_APP_LOCALE || "en",
    // defaultLocale: "en",
    // baseUrl: 'https://my-nuxt-app.com'
    // rootRedirect: {
    //   statusCode: 301,
    //   path: "/fa",
    // },
    detectBrowserLanguage: false,
  },
  runtimeConfig: {
    public: {
      NUXT_APP_LOCALE: process.env.NUXT_APP_LOCALE,
      // i18n: {
      //   defaultLocale: process.env.NUXT_APP_LOCALE || "en",
      // },
    },
  },
  primevue: {
    usePrimeVue: true,
    importTheme: { from: "@/themes/mytheme.js" },
    options: {
      unstyled: false,
    },
    // cssLayerOrder: 'tailwind-base,primevue, tailwind-utilities',
    components: {
      // include: "*",
      // exclude: ["Galleria", "Carousel", "Chart", "Editor"],
      prefix: "Prime",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
