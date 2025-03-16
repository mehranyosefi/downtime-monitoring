import type { CookieRef } from "#app";
import UserModule from "~/repository/modules/user";

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
  const user_module = new UserModule();
  const toast = useToast();
  const router = useRouter();
  const localePath = useLocalePath();
  const { t } = useI18n();
  //getters
  const loggedIn = computed(() => state.sessions !== null);

  //actions
  function setUser(payload: { fullName: string; email: string } | null) {
    state.user = payload;
  }
  function setSessions(
    payload: {
      access_token: string;
      refresh_token: string;
    } | null
  ) {
    state.sessions = payload;
  }
  async function logIn(payload: { email: string; password: string }) {
    const { data, error, status } = await user_module.userLogin(payload);
    if (status.value === "error") {
      toast.add({
        severity: "error",
        summary: t(error.value?.data.error),
        life: 3000,
      });
    } else if (status.value === "success") {
      setUser(data.value.user as object);
      setSessions({
        access_token: data.value?.token,
        refresh_token: "",
      });
      toast.add({
        severity: "success",
        summary: t(data.value?.message),
        life: 3000,
      });
      router.push(localePath("/"));
    }
  }
  async function register(payload: {
    email: string;
    fullName: string;
    password: string;
  }) {
    const { data, error, status } = await user_module.userRegister(payload);
    if (status.value === "error") {
      toast.add({
        severity: "error",
        summary: t(error.value?.data.message),
        life: 3000,
      });
    } else if (status.value === "success") {
      setUser(data.value.user as object);
      toast.add({
        severity: "success",
        summary: t(data.value?.message),
        life: 3000,
      });
      router.push(localePath("login"));
    }
  }
  async function logOut() {
    if (state.sessions) {
      const { status, data, error } = await user_module.userLogOut();
      if (status.value === "error") {
        toast.add({
          severity: "error",
          summary: t(error.value?.data.message),
          life: 3000,
        });
      } else if (status.value === "success") {
        setSessions(null);
        toast.add({
          severity: "success",
          summary: t(data.value?.message),
          life: 3000,
        });
        router.push(localePath("index"));
      }
    }
  }
  async function forgetPassword(email: string) {
    const { status, data, error } = await user_module.userForgetPassowrd(email);
    if (status.value === "error") {
      toast.add({
        severity: "error",
        summary: t(error.value?.data.message),
        life: 3000,
      });
    } else if (status.value === "success") {
      toast.add({
        severity: "success",
        summary: data.value?.message,
        life: 15000,
      });
    }
  }
  async function resetPassword(payload: {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
  }) {
    const { status, data, error } = await user_module.userResetPassword(
      payload
    );
    if (status.value === "error") {
      toast.add({
        severity: "error",
        summary: error.value?.data.message,
        life: 3000,
      });
    } else if (status.value === "success") {
      toast.add({
        severity: "success",
        summary: t(data.value?.message),
        life: 15000,
      });
      router.push(localePath("login"));
    }
  }

  return {
    //states
    state,

    //getters
    loggedIn,

    //actions
    setUser,
    setSessions,
    logIn,
    register,
    logOut,
    forgetPassword,
    resetPassword,
  };
});
