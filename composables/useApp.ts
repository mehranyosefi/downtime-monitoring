export const useAppStore = defineStore("app", () => {
  const { locale, locales } = useI18n();

  //state
  const state = reactive({
    theme: useCookie("them", {
      default: () => "dark",
      watch: true,
    }),
  });

  //getters
  const getLocaleOject = computed(() => {
    return locales.value.find((item) => item.code === locale.value)!;
  });
  const getThemeState = computed({
    get() {
      if (state.theme == "dark") return true;
      return false;
    },
    set(val) {
      if (val) state.theme = "dark";
      else state.theme = "light";
    },
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
  return { getLocaleOject, state, getThemeState, update_theme };
});
