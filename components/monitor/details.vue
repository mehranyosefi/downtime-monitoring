<script lang="ts" setup>
import { monitorTypes } from "~/types";

const selectedType = ref();
const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
function setType() {
  const type = route.params.type;
  selectedType.value = monitorTypes.find(({ path }) => path === type);
}
setType();
</script>

<template>
  <div>
    <slot name="selectType">
      <label for="mobitor-type">Monitor type</label>
      <PrimeSelect
        v-model="selectedType"
        :options="monitorTypes"
        optionLabel="name"
        placeholder="Select a Type"
        class="w-full mt-2"
        :pt="{
          root: '!w-full',
          option: 'p-0!',
          listContainer: 'min-h-64!',
          overlay: '!max-w-0 ',
        }"
        id="mobitor-type"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex items-center gap-x-2">
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
            <svg
              class="size-14 min-w-14 text-green-500 dark:text-primary-500 inline-block"
            >
              <use :href="slotProps.option.icon"></use>
            </svg>
            <div class="w-full">
              <h3
                class="font-bold text-xl text-gray-900 dark:text-gray-100"
                v-text="slotProps.option.label"
              ></h3>
              <p
                class="text-sm text-gray-700 dark:text-gray-300 text-ellipsis overflow-hidden w-[calc(100%-3.5rem)]"
                v-text="slotProps.option.description"
              ></p>
            </div>
          </nuxt-link>
        </template>
        <template #dropdownicon>
          <svg class="size-7">
            <use class="size-7" href="/img/icons.svg#arrow-down-rounded"></use>
          </svg>
        </template>
      </PrimeSelect>
    </slot>
    <PrimeDivider
      :pt="{
        root: '!my-5',
      }"
    />
    <label for="monitor-url" v-text="t('phrases.etc.urlToMonitor')"></label>
    <PrimeInputText
      name="url"
      :placeholder="t('phrases.placeholder.email')"
      value="https://"
      fluid
      :pt="{
        root: 'mt-1',
      }"
    />
  </div>
</template>
