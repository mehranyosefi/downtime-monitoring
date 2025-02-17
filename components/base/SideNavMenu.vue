<script setup lang="ts">
import type { MegaMenuInterface } from "~/types";

defineProps<{
  items: MegaMenuInterface[];
  subItems?: MegaMenuInterface[];
}>();

const { t } = useI18n();
const localepath = useLocalePath();
const useUser = useUserStore();
if (import.meta.client) {
  document.documentElement.classList.remove("unscrollable");
}
</script>

<template>
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
    <PrimeDivider class="divider my-10" />
    <PrimeMenu
      :model="[subItems[0]]"
      :pt="{
        root: '!border-none !rounded-none',
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
    <PrimeDivider class="divider my-10" />
    <PrimeMenu
      :model="items.slice(1)"
      :pt="{
        root: '!border-none !rounded-none',
        item: 'text-2xl my-3 font-bold',
        itemContent:
          'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !leading-6',
        end: 'hover:!text-green-500 dark:hover:!text-primary-500 !transition-colors !duration-75 w-fit !h-[20px] !leading-6 mb-6 mt-2',
      }"
    >
      <template #item="{ item, props }">
        <NuxtLink :to="item.path">
          <span v-text="t(item.label as string)"></span>
        </NuxtLink>
      </template>
      <template #end>
        <NuxtLink
          v-if="!useUser.loggedIn"
          :to="localepath('login')"
          class="text-2xl font-bold w-fit"
        >
          <span v-text="t('general.login')"></span>
        </NuxtLink>
        <NuxtLink
          v-else
          :to="localepath('dashboard')"
          class="text-2xl font-bold w-fit capitalize"
        >
          <span v-text="t('general.dashboard')"></span>
        </NuxtLink>
      </template>
    </PrimeMenu>
    <PrimeDivider class="divider my-10" />
    <PrimeButton
      v-if="!useUser.loggedIn"
      severity="success"
      :pt="{
        root: '!block !mx-auto !px-8 mt-5 mb-10',
      }"
      name="register"
    >
      <NuxtLink
        :to="localepath('register')"
        v-text="t('general.sign_out')"
        class="font-semibold"
      ></NuxtLink>
    </PrimeButton>
  </div>
</template>

<style lang="postcss" scoped>
.divider::before {
  border-block-start-color: var(--p-gray-400);
}
.dark {
  .divider ::before {
    border-block-start-color: var(--p-gray-500);
  }
}
</style>
