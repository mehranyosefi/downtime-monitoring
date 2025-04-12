<script setup lang="ts">
import {
  LazyDashboardMonitorDetails,
  LazyDashboardMonitorMaintenance,
  LazyDashboardMonitorNotifications,
} from "#components";
import { addMonitorTabs } from "~/types";
const { locale } = useI18n();
const appStore = useAppStore();
const localePath = useLocalePath();
definePageMeta({
  middleware: "auth",
});
const { t } = useI18n();
const route = useRoute();

const tab = computed(() => {
  const query = route.query;
  if (query.hasOwnProperty("tab")) {
    if (query.tab === "notifications") return LazyDashboardMonitorNotifications;
    else return LazyDashboardMonitorMaintenance;
  }
  return LazyDashboardMonitorDetails;
});
const dynamicComponent = ref<string>("dynamicComponent");
</script>
<template>
  <div>
    <div>
      <PrimeButton
        as="router-link"
        severity="secondary"
        :pt="{
          root: 'flex items-center! py-1! px-3! rounded-lg! gap-x-1! group',
        }"
        :to="localePath('dashboard-monitors')"
      >
        <svg
          class="size-4 pb-[3px] transition-transform duration-300 group-hover:-translate-x-[2px] group-hover:rtl:translate-x-[2px] rtl:rotate-180"
          :dir="appStore.dir"
        >
          <use class="size-4" href="/img/icons.svg#arrow-back"></use>
        </svg>
        <span class="capitalize" v-text="t('general.monitoring')"></span>
      </PrimeButton>
      <h1
        v-if="locale === 'en'"
        class="text-xl font-semibold capitalize my-5"
        v-text="
          `${t('general.add')} ${t('general.single')} ${t('general.monitor')}`
        "
      ></h1>
      <h1
        v-else
        class="text-xl font-semibold capitalize p-5"
        v-text="
          `${t('general.add')} ${t('general.monitor')} ${t('general.single')}`
        "
      ></h1>
    </div>
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div
          class="flex items-center lg:flex-col lg:items-start lg:order-1 lg:col-start-11 lg:col-span-2"
        >
          <nuxt-link
            v-for="tab in addMonitorTabs"
            :key="tab.label"
            :to="`${localePath('dashboard-monitors-new')}${$route.params.type}${
              tab.query
            }`"
            class="capitalize px-5 py-1 border-b-2 mx-auto lg:border-b-0 border-b-gray-200 dark:border-b-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 w-full lg:w-40 inline-block text-center lg:text-start transition duration-300"
            :class="{
              'border-b-green-500 text-green-500 dark:border-b-primary-500 dark:text-primary-500':
                $route.query.tab == tab.name,
            }"
          >
            <span
              v-if="locale === 'en'"
              v-text="
                `${t(tab.label.split(' ')[0])} ${
                  tab.label.includes(' ') ? t(tab.label.split(' ')[1]) : ''
                }`
              "
            ></span>
            <span
              v-else
              v-text="
                `${
                  tab.label.includes(' ') ? t(tab.label.split(' ')[1]) : ''
                } ${t(tab.label.split(' ')[0])}`
              "
            ></span>
          </nuxt-link>
        </div>
        <div class="lg:col-span-10 mt-5">
          <component class="page-animation" :is="tab" ref="dynamicComponent" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <PrimeButton
        severity="success"
        :pt="{
          root: 'items-center! rounded-xl! px-8!',
        }"
      >
        <span
          class="capitalize"
          v-text="`${t('general.creating')} ${t('general.monitor')}`"
        ></span>
      </PrimeButton>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
