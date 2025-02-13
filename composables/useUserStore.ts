import type { CookieRef } from "#app";

export const useUserStore = defineStore("user", () => {
  interface UserState {
    user: null | object;
    sessions?:
      | CookieRef<null>
      | { access_token: string; refresh_token: string };
  }
  const state = reactive<UserState>({
    user: null,
    sessions: useCookie("sessions", {
      default: () => null,
      watch: true,
    }),
  });

  //getters
  const loggedIn = computed(() => state.sessions !== null);

  //actions
  function setUser(payload: object) {
    state.user = payload;
  }
  function setSessions(payload: {
    access_token: string;
    refresh_token: string;
  }) {
    state.sessions = payload;
  }

  return {
    //states
    state,

    //getters
    loggedIn,

    //actions
    setUser,
    setSessions,
  };
});
