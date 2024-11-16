<script lang="ts" setup>
import type { LocaleObject } from "@nuxtjs/i18n";

const { locale, locales, setLocale } = useI18n();
const useApp = useAppStore();
const windowProperty = useWindowProperty();
const menu_language = ref<boolean>(false);

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
</script>
<template>
  <div class="bg-green-900/90 dark:bg-green-100/90 h-screen transition-all">
    <div class="container mx-auto">
      <div class="absolute flex items-center top-6">
        <section class="languages">
          <base-menu
            :active="menu_language"
            :m-width="windowProperty.isOnMobile ? 10 : 0"
          >
            <template #activator>
              <base-button
                @click="menu_language = !menu_language"
                v-click-outside="() => (menu_language = false)"
              >
                <img
                  :src="useApp.getLocaleOject.logo"
                  :alt="useApp.getLocaleOject.code"
                  class="mx-1"
                />
                <span class="hidden md:block">{{
                  `${$t(
                    "general.country." + useApp.getLocaleOject.countryName
                  )}(${useApp.getLocaleOject?.language})`
                }}</span>
              </base-button>
            </template>
            <template #items>
              <nav class="menu__language">
                <ul class="list-none">
                  <li v-for="lo in locales" :key="lo.code">
                    <BaseButton @click="setLocaleLanguage(lo)">
                      <span>{{
                        `${$t("general.country." + lo.countryName)}`
                      }}</span
                      ><span class="hidden md:inline">
                        {{ `(${lo?.language})` }}
                      </span>
                    </BaseButton>
                  </li>
                </ul>
              </nav>
            </template>
          </base-menu>
        </section>
        <section id="toggle-theme" class="mx-2 md:mx-7 h-6 rtl">
          <label class="inline-flex items-center cursor-pointer">
            <input
              ref="state-theme"
              type="checkbox"
              v-model="useApp.getThemeState"
              class="sr-only peer"
              :checked="useApp.getThemeState"
            />
            <div
              class="relative w-12 h-6 rounded-full border border-gray-900 bg-gray-700 dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-[1px] after:start-[23px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-gray-200"
              :class="{
                checked: useApp.getThemeState,
                'after:content-moon': !useApp.getThemeState,
                'after:content-sun': useApp.getThemeState,
              }"
            ></div>
          </label>
        </section>
      </div>
      <div class="columns-1 w-full md:w-2/3 xl:w-2/5 mx-auto">
        <main class="w-full pt-14 text-white dark:text-balck">
          <slot name="header">
            <h1
              v-text="$t('general.UptimeRobot')"
              class="text-3xl text-center font-bold"
            ></h1>
          </slot>
          <div
            class="bg-gray-800 dark:bg-gray-200 mt-10 rounded-md shadow-lg py-10 px-14"
          >
            <slot />
          </div>
          <slot name="footer"></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
section.languages {
  @apply w-fit text-white dark:text-black px-2;
  .base-btn {
    @apply bg-green-900 dark:bg-green-200/30 flex items-center px-1 rounded shadow-none hover:bg-green-900/80
    dark:hover:bg-green-200/80 text-base;
  }
}
</style>
<style lang="postcss">
#teleports .menu .menu__language .base-btn {
  @apply rounded-none text-sm bg-gray-800 dark:bg-gray-200 hover:bg-gray-900/60 dark:hover:bg-gray-300/40 shadow-lg;
}
</style>
