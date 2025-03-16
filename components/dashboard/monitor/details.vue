<script lang="ts" setup>
import { monitorTypes, type NewMonitorDataType } from "~/types";

const selectedType = ref();
const localePath = useLocalePath();
const route = useRoute();
const { t, locale } = useI18n();

const formData = reactive<NewMonitorDataType>({
  type: route.params.type as string,
  address: "https://",
  notifyType: [""],
  monitorIterval: "",
});

function setType() {
  const type = route.params.type;
  selectedType.value = monitorTypes.find(({ path }) => path === type);
}
setType();
</script>

<template>
  <div>
    <slot name="selectType">
      <label for="monitor-type">
        <span
          v-if="locale === 'en'"
          v-text="`${t('general.monitor')} ${t('general.type')}`"
        ></span>
        <span
          v-else
          v-text="`${t('general.type')} ${t('general.monitor')}`"
        ></span>
      </label>
      <PrimeSelect
        v-model="selectedType"
        :options="monitorTypes"
        optionLabel="name"
        placeholder="Select a Type"
        :pt="{
          root: '!w-full  mt-2',
          option: 'p-0!',
          listContainer: 'min-h-64!',
          overlay: '!max-w-0 ',
        }"
        id="monitor-type"
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
      v-model="formData.address"
      name="url"
      :placeholder="t('phrases.placeholder.url')"
      fluid
      :pt="{
        root: 'mt-2',
      }"
      dir="ltr"
    />
    <PrimeDivider
      :pt="{
        root: '!my-5',
      }"
    />
    <label for="monitor-url" v-text="t('phrases.etc.howNotifyYou')"></label>
    <div class="card flex flex-wrap gap-x-8 mt-2">
      <div class="flex items-center gap-2">
        <PrimeCheckbox
          v-model="formData.notifyType"
          inputId="email"
          name="email"
          value="email"
          :pt="{
            box: '',
          }"
        />
        <label for="email" v-text="t('general.email')"> </label>
      </div>
      <div class="flex items-center gap-2">
        <PrimeCheckbox
          v-model="formData.notifyType"
          inputId="sms"
          name="sms"
          value="sms"
        />
        <label for="sms" v-text="t('general.sms')"> </label>
      </div>
      <div class="flex items-center gap-2">
        <PrimeCheckbox
          v-model="formData.notifyType"
          inputId="voice_call"
          name="voice_call"
          value="voice_call"
          disabled
        />
        <label for="voice_call" v-text="t('general.voice_call')"> </label>
      </div>
    </div>
  </div>
</template>
