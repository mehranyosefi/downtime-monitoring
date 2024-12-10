import { mountSuspended } from "@nuxt/test-utils/runtime";
import { test, it, describe, expect } from "vitest";
import { BaseMegaMenu } from "#components";
import { headerMegaMenu } from "~/types/menu";
import { createI18n } from "vue-i18n";
// import { useI18n } from "vue-i18n";
// import { mount } from "@vue/test-utils";
import { headerMegaMenuTeamItems } from "~/types/menu";
import fa from "~/locales/fa.json";
import en from "~/locales/en.json";
import { setup } from "@nuxt/test-utils";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    fa: fa,
    en: en,
  },
});
// config.global.plugins = [i18n];

describe("megamenu test", async () => {
  // await setup({
  //   // test context options
  // });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("can mount megamenu component", async () => {
    // vi.stubGlobal('definePageMeta', vi.fn())
    expect(BaseMegaMenu).toBeTruthy();
    // const mock = vi.hoisted(() => {
    //   return {
    //     composable: vi.fn().mockReturnValue({
    //       t: vi.fn(),
    //       locale: vi.fn(),
    //     }),
    //   };
    // });
    // vi.mock("vue-i18n", () => ({
    //   useI18n: mock.composable,
    // }));
    const wrapper = await mountSuspended(BaseMegaMenu, {
      props: {
        items: headerMegaMenu,
        subItems: headerMegaMenuTeamItems,
      },
      global: {
        plugins: [i18n],
      },
      attachTo: document.body,
      // mocks: {
      //   t: (msg) => msg,
      // },
    });
    // expect(wrapper.html()).toMatchInlineSnapshot(`""`);
    expect(wrapper.html()).toContain("Monitoring");
  });
  test("the subMenu works on click event correctly", async () => {
    const wrapped = await mountSuspended(BaseMegaMenu, {
      props: {
        items: headerMegaMenu,
        subItems: headerMegaMenuTeamItems,
      },
      global: {
        plugins: [i18n],
      },
    });
    await wrapped.find("button.megamenu--button").trigger("click");
    expect(wrapped.find(".megamenu").html()).toContain(
      'class="megamenu--submenu"'
    );
  });
  test("the subMenu works on click hover correctly", async () => {
    const wrapped = await mountSuspended(BaseMegaMenu, {
      props: {
        items: headerMegaMenu,
        subItems: headerMegaMenuTeamItems,
      },
      global: {
        plugins: [i18n],
      },
    });
    await wrapped.find("button.megamenu--button").trigger("mouseover");
    expect(wrapped.find(".megamenu").html()).toContain(
      'class="megamenu--submenu"'
    );
  });
});
