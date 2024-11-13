import fa from "@/locales/fa.json";
import en from "@/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: useRuntimeConfig().public.APP_LOCALE,
  messages: {
    fa: fa,
    en: en,
  },
}));
