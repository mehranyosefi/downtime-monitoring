import type { NitroFetchOptions } from "nitropack";
export function useCustomFetch<T>(
  url: string,
  fetchOptions?: NitroFetchOptions<"json">
): Promise<T> {
  const runtimeConfig = useRuntimeConfig();
  const useApp = useAppStore();
  const overridedOptions = {
    ...fetchOptions,
    headers: {
      ...fetchOptions?.headers,
      locale: useApp.getLocaleOject.code,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL: runtimeConfig.public.baseUrlApi,
  };
  return $fetch(url, {
    ...overridedOptions,
  });
}
