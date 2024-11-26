export const userStore = defineStore("user", () => {
  const state = reactive({
    isLogin: false,
  });

  return { state };
});
