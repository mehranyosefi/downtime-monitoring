<script setup lang="ts">
import "primeicons/primeicons.css";
import type { MegaMenuItemInterface } from "~/types/menu";

const props = defineProps<{
  items: MegaMenuItemInterface[];
  subItems?: MegaMenuItemInterface[];
}>();

const { t, locale } = useI18n();
const localepath = useLocalePath();
const sidenav = useTemplateRef("sidenav");
const sideNavActive = ref<boolean>(false);

function toggle_sideNav() {
  if (sideNavActive.value) {
    sidenav.value!.style.width = "0";
    sideNavActive.value = false;
    document.documentElement.classList.remove("unscrollable");
  } else {
    sideNavActive.value = true;
    sidenav.value!.style.width = "100%";
    document.documentElement.classList.add("unscrollable");
  }
}

defineExpose({
  toggle_sideNav,
  sideNavActive,
});
</script>

<template>
  <div
    ref="sidenav"
    class="sidenav"
    :class="{ 'left-0': locale == 'en', 'right-0': locale == 'fa' }"
  >
    <div class="px-4 pb-28">
      <PrimeMenu
        :model="[items[0]]"
        :pt="{
          root: '!text-gray-100 !border-none !rounded-none !p-10',
          submenuLabel: '!p-0 mb-2 font-bold text-2xl',
          item: '!px-2 text-xl py-1 my-2',
          itemContent: 'hover:!text-green-500 dark:hover:!text-primary-500',
          itemIcon: '!text-green-500 dark:!text-primary-500',
        }"
      >
        <template #submenulabel="{ item }">
          <h4
            class="text-gray-950 dark:text-gray-100"
            v-text="t('general.monitors')"
          ></h4>
        </template>
        <template #item="{ item, props }">
          <NuxtLink :to="item.path" class="flex items-center w-fit">
            <svg
              width="3rem"
              height="3rem"
              class="text-green-500 dark:text-primary-500"
            >
              <use :href="item.icon" width="3rem" height="3rem"></use>
            </svg>
            <span v-text="t(item.label as string)" class="px-4"></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
      <PrimeDivider />
      <PrimeMenu
        :model="[subItems[0]]"
        :pt="{
          root: '!text-gray-100 !border-none !rounded-none !p-10',
          submenuLabel: '!p-0 mb-2 font-bold text-2xl',
          item: '!px-2 text-xl py-1 my-2',
          itemContent: 'hover:!text-green-500 dark:hover:!text-primary-500',
          itemIcon: '',
        }"
      >
        <template #submenulabel="{ item }">
          <h4
            class="text-gray-950 dark:text-gray-100"
            v-text="t('general.teams')"
          ></h4>
        </template>
        <template #item="{ item, props }">
          <NuxtLink :to="item.path">
            <span v-text="t(item.label as string)" class="px-4"></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
      <PrimeDivider />
      <PrimeMenu
        :model="items.slice(1)"
        :pt="{
          root: '!text-gray-100 !border-none !rounded-none !p-5',
          item: 'text-2xl my-3 font-bold',
          itemContent: 'hover:!text-green-500 dark:hover:!text-primary-500',
          end: 'text-gray-900 dark:text-gray-100 hover:!text-green-500 dark:hover:!text-primary-500',
        }"
      >
        <template #item="{ item, props }">
          <NuxtLink :to="item.path">
            <span v-text="t(item.label as string)" class="px-4"></span>
          </NuxtLink>
        </template>
        <template #end>
          <NuxtLink :to="localepath('login')" class="text-2xl my-3 font-bold">
            <span v-text="t('login')" class="px-4"></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
      <PrimeDivider />
      <PrimeButton
        severity="success"
        :pt="{
          root: '!block !mx-auto !px-14 mt-5 mb-10',
        }"
      >
        <NuxtLink
          :to="localepath('register')"
          v-text="t('general.sign_out')"
          class="font-semibold"
        ></NuxtLink>
      </PrimeButton>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.sidenav {
  @apply h-full w-0 fixed z-[1] top-[8rem] overflow-x-hidden overflow-y-auto transition-all bg-white dark:bg-gray-800 shadow-md;
}
</style>
