import type { CookieRef } from "#app";
import Login from "~/pages/login.vue";

export const useUserStore = defineStore("user", () => {
  interface UserState {
    user: CookieRef<null> | { fullName: string; email: string };
    sessions?:
      | CookieRef<null>
      | { access_token: string; refresh_token: string };
  }
  const state = reactive<UserState>({
    user: useCookie("user", {
      default: () => null,
      watch: true,
    }),
    sessions: useCookie("sessions", {
      default: () => null,
      watch: true,
    }),
  });

  //getters
  const loggedIn = computed(() => state.sessions !== null);

  //actions
  function setUser(payload: object | null) {
    state.user = payload;
  }
  function setSessions(payload: {
    access_token: string;
    refresh_token: string;
  }) {
    state.sessions = payload;
  }

  async function logIn(params: { email: string; password: string }) {}
  async function logout() {}

  return {
    //states
    state,

    //getters
    loggedIn,

    //actions
    logIn,
    logout,
    setUser,
    setSessions,
  };
});
