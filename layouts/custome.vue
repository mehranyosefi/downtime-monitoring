<script lang="ts" setup>
import type { LocaleObject } from "@nuxtjs/i18n";
import "primeicons/primeicons.css";

const { locale, locales, setLocale } = useI18n();
const useApp = useAppStore();
const windowProperty = useWindowProperty();
const date = ref<any>("");
const menu_language = ref();
const items = ref([
  {
    label: "Options",
    items: [
      {
        label: "Refresh",
        icon: "pi pi-refresh",
      },
      {
        label: "Export",
        icon: "pi pi-upload",
      },
    ],
  },
]);
useHead({
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl" : "ltr",
      useApp.state.theme === "light" ? "dark" : "",
    ],
  },
});

//functions
function setLocaleLanguage(locale: LocaleObject) {
  setLocale(locale.code);
}
const toggle = (event) => {
  menu_language.value.toggle(event);
};
</script>
<template>
  <div class="bg-green-100/90 dark:bg-green-900/90 h-screen transition-all">
    <div class="container mx-auto">
      <div class="absolute flex items-center top-6">
        <section class="languages">
          <PrimeButton
            class="py-2 !px-2 w-44"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_language_menu"
          >
            <PrimeImage
              :src="useApp.getLocaleOject.logo"
              :alt="useApp.getLocaleOject.code"
              class="mx-1"
              unstyled
            />
            <span class="hidden md:block text-black dark:text-white">{{
              `${$t("general.country." + useApp.getLocaleOject.countryName)}(${
                useApp.getLocaleOject?.language
              })`
            }}</span>
          </PrimeButton>
          <PrimeMenu
            ref="menu_language"
            id="overlay_language_menu"
            :model="locales"
            :popup="true"
            class="mt-1 !w-44 !min-w-fit !rounded"
            :pt="{
              root: '!border-gray-400 dark:!border-gray-900',
              list: 'bg-gray-200 dark:bg-gray-800 !p-0 rounded border-transparent',
            }"
          >
            <template #item="{ item, props }">
              <PrimeButton
                @click="setLocaleLanguage(item)"
                class="w-full px-2 !text-sm !bg-gray-100 dark:!bg-gray-900 hover:!bg-gray-300 dark:hover:!bg-gray-900/60 shadow-lg dark:!text-white !border-none"
              >
                <span
                  v-text="`${$t('general.country.' + item.countryName)}`"
                ></span>
                <span
                  class="hidden md:inline"
                  v-text="`(${item?.language})`"
                ></span>
              </PrimeButton>
            </template>
          </PrimeMenu>
        </section>
        <section id="toggle-theme" class="mx-2 md:mx-5 h-6">
          <PrimeToggleSwitch
            v-model="useApp.getThemeState"
            :pt="{
              slider: [
                !useApp.getThemeState
                  ? '!bg-gray-300 !border-gray-400/50'
                  : '!bg-gray-500 !border-gray-200/50',
                'shadow-lg',
              ],
              handle: [!useApp.getThemeState ? '!bg-gray-200' : '!bg-gray-300'],
            }"
          >
            <template #handle="{ checked }">
              <i
                :class="{
                  checked: useApp.getThemeState,
                  'content-sun': !checked,
                  'content-moon': checked,
                }"
              />
            </template>
          </PrimeToggleSwitch>
        </section>

        <!-- <PrimeMenu :model="" /> -->
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
section.languages {
  @apply w-fit text-white dark:text-black px-2;
  .p-button {
    @apply dark:bg-green-900 bg-green-200/30 flex items-center px-1 rounded shadow-none hover:bg-green-200/80
    dark:hover:bg-green-800 text-base;
  }
}
</style>
<style lang="postcss">
#teleports .menu .menu__language .base-btn {
  @apply rounded-none text-sm bg-gray-800 dark:bg-gray-200 hover:bg-gray-900/60 dark:hover:bg-gray-300/40 shadow-lg;
}
</style>
