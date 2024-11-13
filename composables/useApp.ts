export const useAppStore = defineStore("app", () => {
  const { locale, locales } = useI18n();

  //state
  const state = reactive({
    theme: useCookie("them", {
      default: () => "dark",
    }),
  });

  //getters
  const getLocaleOject = computed(() => {
    return locales.value.find((item) => item.code === locale.value)!;
  });
  const getThemeState = computed({
    get() {
      if (state.theme == "dark") return false;
      else return true;
    },
    set(val) {
      if (val) state.theme = "light";
      else state.theme = "dark";
    },
  });

  //actions
  function update_theme(theme: string) {
    state.theme = theme;
  }

  //etc
  if (state.theme != "dark" && import.meta.client) {
    document.body.classList.add("dark");
  }
  watch(
    () => state.theme,
    (val) => {
      if (val !== "dark") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    }
  );
  // const getterLocale = computed({
  //   get() {
  //     return state.locale_state!;
  //   },
  //   set(val) {
  //     state.locale_state = val;
  //   },
  // });
  // const getterLocale = computed(()=> )
  return { getLocaleOject, state, getThemeState, update_theme };
});
