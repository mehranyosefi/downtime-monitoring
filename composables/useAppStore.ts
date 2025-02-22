export const useAppStore = defineStore("app", () => {
  const { locale, locales } = useI18n();

  //state
  const state = reactive({
    theme: useCookie("them", {
      default: () => "light",
      watch: true,
    }),
  });

  //getters
  const getLocaleOject = computed(() => {
    return locales.value.find((item) => item.code === locale.value)!;
  });
  const isDarkTheme = computed({
    get() {
      if (state.theme == "dark") return true;
      return false;
    },
    set(val) {
      if (val) state.theme = "dark";
      else state.theme = "light";
    },
  });
  const dir = computed(() => {
    if (locale.value === "en") return "ltr";
    return "rtl";
  });

  //actions
  function update_theme(theme: string) {
    state.theme = theme;
  }

  //etc
  watch(
    () => state.theme,
    (val) => {
      if (val == "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  );
  return {
    //states
    state,
    //getters
    getLocaleOject,
    isDarkTheme,
    dir,
    //actions
    update_theme,
  };
});
