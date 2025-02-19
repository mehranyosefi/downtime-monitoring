<script lang="ts" setup>
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
    title: "test",
  }
);

const useWindow = useWindowProperty();
const dockPosition = computed(() => {
  if (useWindow.isOnMobile.value) return "bottom";
  else if (locale.value === "en") return "left";
  else return "right";
});
const sideBarItems = computed(() => {
  if (useWindow.isOnMobile.value) {
    return dashboardMenu.slice(0, 4);
  } else {
    return dashboardMenu.filter((item) => item.path);
  }
});
</script>

<template>
  <div class="root-element-page overflow-x-hidden overflow-y-auto h-screen">
    <div
      class="w-full xs:w-[calc(100%-4rem)]"
      :class="{
        'xs:ml-16 lg:ml-64': locale === 'en',
        'xs:mr-16 lg:mr-64': locale === 'fa',
      }"
    >
      <header>
        <div
          class="flex justify-center items-baseline bg-white dark:bg-gray-800 py-2 xs:hidden"
        >
          <div
            class="w-2 h-2 rounded-full bg-green-500 dark:bg-primary-500 inline-block"
          ></div>
          <span
            v-text="t('general.UptimeRobot')"
            class="!inline-block mx-[3px]"
          ></span>
        </div>
        <!-- <slot name="header">
          <h1 class="text-xl font-semibold" v-text="title"></h1>
        </slot> -->
      </header>
      <main>
        <slot />
      </main>
    </div>

    <ClientOnly>
      <PrimeDock
        :model="sideBarItems"
        :pt="{
          root: '!bg-white dark:!bg-gray-800 shadow-md w-16 lg:w-64',
          listContainer:
            '!p-0 !rounded-none h-full !justify-start !bg-transparent w-full',
          list: 'w-full h-full !flex !justify-start',
          item: 'w-full !p-0',
        }"
        :position="dockPosition"
      >
        <template #item="{ item, props, hasSubmenu }">
          <PrimeButton
            :as="item.path ? 'router-link' : 'button'"
            :to="item.path"
            class="!w-full !rounded-none !border-none flex flex-col lg:flex-row items-center justify-center sm:!py-4 hover:!bg-gray-200 dark:hover:!bg-gray-900"
            :name="item.label as string"
            :pt="{
              root: '!py-2',
            }"
            outlined
            v-tooltip="
              dockPosition !== 'bottom' && useWindow.isOnTablet.value
                ? t(item.label)
                : ''
            "
          >
            <svg class="size-8 mx-1 text-gray-400">
              <use class="size-8" :href="item.icon"></use>
            </svg>
            <span
              class="text-gray-900 dark:text-gray-100 text-lg font-semibold xs:hidden lg:block"
              >{{ t(item.label as string) }}</span
            >
          </PrimeButton>
        </template>
      </PrimeDock>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped></style>
