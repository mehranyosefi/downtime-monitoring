<script lang="ts" setup>
const { locale, t } = useI18n();
const useApp = useAppStore();
useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "light" ? "pDark" : "",
    ],
  },
});
</script>
<template>
  <div
    class="bg-gray-100/90 dark:bg-gray-900/90 h-screen transition-all overflow-y-auto"
  >
    <div class="container mx-auto w-11/12">
      <header class="sticky top-0">
        <base-header />
        <slot name="header" />
      </header>
      <main class="w-full pt-14 text-black dark:text-white">
        <div class="bg-slate-200">
          <slot />
        </div>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
