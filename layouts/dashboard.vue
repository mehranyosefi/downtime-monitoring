<script lang="ts" setup>
import type { ShallowRef } from "vue";
import { dashboardMenu } from "~/types";

const { locale, t } = useI18n();
const useApp = useAppStore();

useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "dark" ? "dark" : "",
    ],
    lang: locale.value,
  },
});

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "",
  }
);

const useWindow = useWindowProperty();
const sideBarItems = computed(() => {
  if (useWindow.isOnMobile.value) {
    return dashboardMenu.slice(0, 4);
  } else {
    return dashboardMenu.filter((item) => item.path);
  }
});
const conversation: ShallowRef<boolean> = shallowRef<boolean>(false);
</script>

<template>
  <div class="root-element-page overflow-x-hidden overflow-y-auto h-screen">
    <div
      class="w-full xs:w-[calc(100%-4rem)] lg:w-[calc(100%-13rem)]"
      :class="{
        'xs:ml-16 lg:ml-52': locale === 'en',
        'xs:mr-16 lg:mr-52': locale === 'fa',
      }"
    >
      <header>
        <div
          class="flex justify-center items-baseline bg-white dark:bg-gray-800 py-4 xs:hidden"
        >
          <div
            class="w-2 h-2 rounded-full bg-green-500 dark:bg-primary-500 inline-block"
          ></div>
          <span
            v-text="t('general.UptimeRobot')"
            class="inline-block! text-2xl font-semibold mx-[3px]"
          ></span>
        </div>
      </header>

      <main class="page-animation">
        <slot />
      </main>
    </div>

    <ClientOnly>
      <DashboardSideBar :items="sideBarItems"></DashboardSideBar>
    </ClientOnly>
    <UiChat
      class="chat"
      :active="conversation"
      @trigger-active="(val:boolean)=>conversation = val"
    />
  </div>
</template>

<style scoped>
@reference "~/assets/styles/main.css";

.chat :deep(.activator) {
  @apply max-md:bottom-26;
}
</style>
