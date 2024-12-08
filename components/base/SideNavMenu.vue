<script setup lang="ts">
import "primeicons/primeicons.css";
import type { MegaMenuInterface } from "~/types/menu";

const props = defineProps<{
  items: MegaMenuInterface[];
  subItems?: MegaMenuInterface[];
}>();

const { t, locale } = useI18n();
const localepath = useLocalePath();
const route = useRoute();
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
if (import.meta.client) {
  document.documentElement.classList.remove("unscrollable");
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
    <div class="px-24 pt-16 pb-28">
      <PrimeMenu
        :model="[items[0]]"
        :pt="{
          root: '!border-none !rounded-none',
          submenuLabel: '!p-0 mb-2 font-bold text-2xl',
          item: '!px-2 text-xl py-1 my-2',
          itemContent:
            'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !leading-4',
          itemIcon: '!text-green-500 dark:!text-primary-500',
        }"
      >
        <template #submenulabel="{ item }">
          <h4 class="" v-text="t('general.monitors')"></h4>
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
      <PrimeDivider class="divider" />
      <PrimeMenu
        :model="[subItems[0]]"
        :pt="{
          root: '!text-gray-100 !border-none !rounded-none',
          submenuLabel: '!p-0 mb-2 font-bold text-2xl',
          item: '!px-2 text-xl py-1 my-2',
          itemContent:
            'hover:!text-green-500 dark:hover:!text-primary-500  w-fit !leading-4',
          itemIcon: '',
        }"
      >
        <template #submenulabel>
          <h4 v-text="t('general.teams')"></h4>
        </template>
        <template #item="{ item, props }">
          <NuxtLink :to="item.path">
            <span v-text="t(item.label as string)" class="px-4"></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
      <PrimeDivider class="divider" />
      <PrimeMenu
        :model="items.slice(1)"
        :pt="{
          root: '!text-gray-100 !border-none !rounded-none',
          item: 'text-2xl my-3 font-bold',
          itemContent:
            'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !leading-6',
          end: 'text-gray-900 dark:!text-gray-100 hover:!text-green-500 dark:hover:!text-primary-500 !transition-colors !duration-75 w-fit !h-[20px] !leading-6',
        }"
      >
        <template #item="{ item, props }">
          <NuxtLink :to="item.path">
            <span v-text="t(item.label as string)"></span>
          </NuxtLink>
        </template>
        <template #end>
          <NuxtLink
            :to="localepath('login')"
            class="text-2xl my-3 font-bold w-fit"
          >
            <span v-text="t('general.login')"></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
      <PrimeDivider class="divider" />
      <PrimeButton
        severity="success"
        :pt="{
          root: '!block !mx-auto !px-8 mt-5 mb-10',
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
  @apply h-full w-0 fixed z-[1] top-[8rem] overflow-x-hidden overflow-y-auto transition-all bg-gray-200 dark:bg-gray-800 shadow-md;
}

.divider {
  @apply my-10;
  &::before {
    border-block-start-color: var(--p-gray-400);
  }
}
.dark {
  .divider {
    &::before {
      border-block-start-color: var(--p-gray-500);
    }
  }
}
</style>
