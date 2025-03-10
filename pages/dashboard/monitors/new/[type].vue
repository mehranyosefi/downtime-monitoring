<script setup lang="ts">
import {
  LazyMonitorDetails,
  LazyMonitorMaintenance,
  LazyMonitorNotifications,
} from "#components";
import { addMonitorTabs, monitorTypes } from "~/types";
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
    if (query.tab === "notifications") return LazyMonitorNotifications;
    else return LazyMonitorMaintenance;
  }
  return LazyMonitorDetails;
});
const selectedType = ref();
function setType() {
  const type = route.params.type;
  selectedType.value = monitorTypes.find(({ path }) => path === type);
}
setType();
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
          <PrimeCard>
            <template #content>
              <div>
                <label for="mobitor-type">Monitor type</label>
                <PrimeSelect
                  v-model="selectedType"
                  :options="monitorTypes"
                  optionLabel="name"
                  placeholder="Select a Type"
                  class="w-full mt-2"
                  :pt="{
                    option: 'p-0!',
                    listContainer: 'min-h-64!',
                  }"
                  id="mobitor-type"
                >
                  <template #value="slotProps">
                    <div
                      v-if="slotProps.value"
                      class="flex items-center gap-x-2"
                    >
                      <svg class="size-14 text-green-500 dark:text-primary-500">
                        <use class="size-14" :href="slotProps.value.icon"></use>
                      </svg>
                      <div>
                        <h2
                          class="font-bold text-xl text-gray-900 dark:text-gray-100"
                          v-text="slotProps.value.label"
                        ></h2>
                        <p
                          class="text-sm dark:text-gray-300"
                          v-text="slotProps.value.description"
                        ></p>
                      </div>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <nuxt-link
                      :to="`${localePath('dashboard-monitors-new')}${
                        slotProps.option.path
                      }`"
                      class="flex items-center w-full p-3 gap-x-2"
                    >
                      <svg class="size-14 text-green-500 dark:text-primary-500">
                        <use
                          class="size-14"
                          :href="slotProps.option.icon"
                        ></use>
                      </svg>
                      <div>
                        <h3
                          class="font-bold text-xl text-gray-900 dark:text-gray-100"
                          v-text="slotProps.option.label"
                        ></h3>
                        <p
                          class="text-sm text-gray-700 dark:text-gray-300"
                          v-text="slotProps.option.description"
                        ></p>
                      </div>
                    </nuxt-link>
                  </template>
                  <template #dropdownicon>
                    <svg class="size-7">
                      <use
                        class="size-7"
                        href="/img/icons.svg#arrow-down-rounded"
                      ></use>
                    </svg>
                  </template>
                  <!-- <template #header>
                  <div class="font-medium p-3">Available Countries</div>
                </template> -->
                  <!-- <template #footer>
                  <div class="p-3">
                    <PrimeButton
                      label="Add New"
                      fluid
                      severity="secondary"
                      text
                      size="small"
                      icon="pi pi-plus"
                    />
                  </div>
                </template> -->
                </PrimeSelect>
              </div>
              <component class="page-animation" :is="tab"></component>
            </template>
          </PrimeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
