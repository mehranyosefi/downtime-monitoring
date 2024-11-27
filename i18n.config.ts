import fa from "@/locales/fa.json";
import en from "@/locales/en.json";

export default defineI18nConfig(() => ({
  // legacy: false,
  // locale: useRuntimeConfig().public.NUXT_APP_LOCALE,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    fa: fa,
    en: en,
  },
}));
