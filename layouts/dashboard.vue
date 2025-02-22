<script lang="ts" setup>
import type { ShallowRef } from "vue";
import { dashboardMenu } from "~/types";

const { locale, t } = useI18n();
const useApp = useAppStore();
const localePath = useLocalePath();

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
            class="!inline-block text-2xl font-semibold mx-[3px]"
          ></span>
        </div>
      </header>

      <main class="page-animation">
        <slot />
      </main>
    </div>

    <ClientOnly>
      <PrimeDock
        :model="sideBarItems"
        :pt="{
          root: 'shadow-2xl w-16 lg:w-52',
          listContainer: `!p-0 !rounded-none h-full !justify-start w-full !border-none`,
          list: 'w-full h-full !flex !justify-start',
          item: 'w-full !p-0',
        }"
        :position="dockPosition"
      >
        <template #item="{ item }">
          <PrimeButton
            :as="item.path ? 'router-link' : 'button'"
            :to="localePath(item.path)"
            class="!w-full !rounded-none !border-none flex flex-col lg:flex-row items-center justify-center lg:!justify-start sm:!py-4 hover:!bg-gray-200 dark:hover:!bg-gray-800 group"
            :name="item.label as string"
            :pt="{
              root: '!py-2 ',
            }"
            outlined
            v-tooltip="
              dockPosition !== 'bottom' && useWindow.isOnTablet.value
                ? t(item.label)
                : ''
            "
            activeClass="dashboard-link-active"
            exactActiveClass="dashboard-link-exact-active"
          >
            <svg
              class="route-link__icon size-8 text-gray-400 group-hover:text-green-500 dark:group-hover:text-primary-500"
            >
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
    <chat
      :active="conversation"
      @trigger-active="(val:boolean)=>conversation = val"
    ></chat>
  </div>
</template>

<style lang="postcss" scoped></style>
