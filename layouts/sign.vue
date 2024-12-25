<script lang="ts" setup>
import "primeicons/primeicons.css";

const useApp = useAppStore();
const { locale, t } = useI18n();

useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "dark" ? "dark" : "",
    ],
  },
});
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="h-screen transition-all overflow-y-auto">
    <div
      class="container mx-auto py-5 w-100 md:w-11/12 max-w-[1500px] page-animation"
    >
      <base-header />
      <main class="w-full">
        <div
          class="columns-1 w-full md:w-2/3 xl:w-2/5 mx-auto mt-5 max-md:pt-32 md:pt-10"
        >
          <slot name="header">
            <h1
              v-text="t('general.UptimeRobot')"
              class="text-3xl text-center font-bold"
            ></h1>
          </slot>

          <slot />
        </div>
      </main>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
