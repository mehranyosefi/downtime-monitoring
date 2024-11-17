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

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
<template>
  <div class="h-screen transition-all overflow-y-auto">
    <div class="container mx-auto py-5">
      <header><base-header /></header>
      <main class="w-full pt-14">
        <div class="columns-1 w-full md:w-2/3 xl:w-2/5 mx-auto">
          <slot name="header">
            <h1
              v-text="t('general.UptimeRobot')"
              class="text-3xl text-center font-bold"
            ></h1>
          </slot>
          <div class="mt-8 rounded-md shadow-lg py-10 px-14">
            <slot />
          </div>
        </div>
      </main>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
