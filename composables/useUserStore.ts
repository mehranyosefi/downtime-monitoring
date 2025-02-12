export const useUserStore = defineStore("user", () => {
  const state = reactive({
    user: null,
    sessions: null,
  });

  const loggedIn = computed(() => state.sessions !== null);

  return { state };
});
