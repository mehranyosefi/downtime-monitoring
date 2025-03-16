import fa from "./i18n/locales/fa/index";
import en from "./i18n/locales/en/index";

export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  messages: {
    fa: fa,
    en: en,
  },
}));
