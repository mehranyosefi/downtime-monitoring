<script lang="ts" setup>
defineProps<{
  items: Array<any>;
}>();

const { locale, t } = useI18n();
const localePath = useLocalePath();
const useWindow = useWindowProperty();
const appStore = useAppStore();

const dockPosition = computed(() => {
  if (useWindow.isOnMobile.value) return "bottom";
  else if (locale.value === "en") return "left";
  else return "right";
});
</script>

<template>
  <nav
    class="fixed bottom-0 ltr:left-0 rtl:right-0 xs:h-screen shadow-2xl w-full bg-gray-100 dark:bg-gray-900"
    :dir="appStore.dir"
  >
    <slot name="prepend"></slot>
    <ul class="p-0 m-0 list-none flex xs:flex-col">
      <li v-for="(item, index) in items" :key="index" class="grow">
        <slot name="item" :item="item">
          <PrimeButton
            :as="item.path ? 'router-link' : 'button'"
            :to="localePath(item.path)"
            class="w-full! rounded-md! border-none! flex flex-col lg:flex-row items-center justify-center lg:justify-start! sm:py-4! hover:bg-gray-200! dark:hover:bg-gray-800! group"
            :name="item.label as string"
            :pt="{
              root: 'py-2! ',
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
        </slot>
      </li>
    </ul>
    <slot name="append"></slot>
  </nav>
</template>
