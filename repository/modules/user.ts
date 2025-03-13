import type { UseFetchOptions } from "nuxt/app";
import { useCustomFetch } from "~/composables/useCustomFetch";
import type { NitroFetchOptions } from "nitropack";

export default class UserModule {
  private RESOURCE = "/user";
  userLogin(
    body: { email: string; password: string },
    options?: UseFetchOptions<"json">
  ) {
    return useApi(`${this.RESOURCE}/login`, {
      method: "post",
      body,
      ...options,
    });
  }
  userRegister(
    body: { email: string; fullName: string; password: string },
    options?: UseFetchOptions<"json">
  ) {
    return useApi(`${this.RESOURCE}/register`, {
      method: "post",
      body,
      ...options,
    });
  }
  userLogOut() {
    return useApi(`${this.RESOURCE}/logout`, { method: "POST" }, true);
  }
  userForgetPassowrd(email: string) {
    const body = { email };
    return useApi(`${this.RESOURCE}/forget-password`, { method: "POST", body });
  }
  userResetPassword(body: {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
  }) {
    return useApi(`${this.RESOURCE}/reset-password`, { method: "POST", body });
  }
}
