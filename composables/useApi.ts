import type { UseFetchOptions } from "nuxt/app";
export function useApi<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
  authRequired?: boolean
) {
  const runtimeConfig = useRuntimeConfig();
  const useApp = useAppStore();
  const user = useUserStore();
  const overrideOptions = {
    ...options,
    headers: {
      ...options?.headers,
      locale: useApp.getLocaleOject.code,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(authRequired &&
        user.state.sessions && {
          Authorization: `Bearer ${user.state.sessions.access_token}`,
        }),
    },
    baseURL: runtimeConfig.public.baseUrlApi,
  };
  return useFetch(url, {
    ...overrideOptions,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
}
