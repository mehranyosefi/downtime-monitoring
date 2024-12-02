import { mountSuspended } from "@nuxt/test-utils/runtime";
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe } from "vitest";
import { BaseHeader } from "#components";
import { createI18n } from "vue-i18n";
import fa from "~/locales/fa.json";
import en from "~/locales/en.json";
import { createTestingPinia } from "@pinia/testing";
import { useAppStore } from "~/composables/useAppStore";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    fa: fa,
    en: en,
  },
});

// const initialAppStore = {

// }

describe("header test", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("can mount header component", async () => {
    expect(BaseHeader).toBeTruthy();
    const pinia = createTestingPinia({ stubActions: false });
    vi.stubGlobal("useLocalePath", () => useLocalePath());
    const useApp = useAppStore(pinia);
    vi.stubGlobal("header", () => useTemplateRef("header"));
    const wrapper = await mountSuspended(BaseHeader, {
      global: {
        plugins: [pinia, i18n],
      },
      attachTo: document.body,
    });
  });
});
