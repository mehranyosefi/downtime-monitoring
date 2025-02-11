import type { UseFetchOptions } from "nuxt/app";
export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  const useApp = useAppStore();
  const runtimeConfig = useRuntimeConfig();
  const overrideOptions = {
    ...options,
    headers: {
      ...options?.headers,
      locale: useApp.getLocaleOject.code,
    },
  };
  return useFetch((runtimeConfig.public.baseUrlApi as string) + url, {
    ...overrideOptions,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
}
