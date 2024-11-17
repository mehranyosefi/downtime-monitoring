<script lang="ts" setup>
import "primeicons/primeicons.css";

const useApp = useAppStore();
const { locale, t } = useI18n();
useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "light" ? "dark" : "",
    ],
  },
});
</script>
<template>
  <div
    class="bg-gray-100/90 dark:bg-gray-900/90 h-screen transition-all overflow-y-auto"
  >
    <div class="container mx-auto py-5">
      <header><base-header /></header>
      <main class="w-full pt-14 text-black dark:text-white">
        <div class="columns-1 w-full md:w-2/3 xl:w-2/5 mx-auto">
          <slot name="header">
            <h1
              v-text="t('general.UptimeRobot')"
              class="text-3xl text-center font-bold"
            ></h1>
          </slot>
          <div
            class="dark:bg-gray-800/95 bg-gray-100 mt-8 rounded-md shadow-lg py-10 px-14"
          >
            <slot />
          </div>
        </div>
      </main>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
