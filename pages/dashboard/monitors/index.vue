<script setup lang="ts">
import { monitorItems } from "~/types";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const menu_monitor = useTemplateRef("menu_monitor");
const router = useRouter();
function toggleMonitorMenu(e) {
  menu_monitor.value?.toggle(e);
}
</script>
<template>
  <div>
    <div class="flex items-center justify-between mt-2">
      <h1
        class="text-xl font-semibold capitalize"
        v-text="t('general.monitors')"
      ></h1>
      <PrimeButtonGroup>
        <PrimeButton
          severity="success"
          :pt="{
            root: 'items-center!',
          }"
          @click="router.push(localePath('/dashboard/monitors/new/http'))"
        >
          <svg class="size-5">
            <use class="size-5" href="/img/icons.svg#plus"></use>
          </svg>
          <span
            class="capitalize"
            v-text="`${t('general.new')} ${t('general.monitor')}`"
          ></span>
        </PrimeButton>
        <PrimeDivider
          layout="vertical"
          class="divider__button w-[1px] mx-0!"
        ></PrimeDivider>
        <PrimeButton severity="success" @click="toggleMonitorMenu">
          <template #icon>
            <svg class="size-6">
              <use
                class="size-6"
                href="/img/icons.svg#arrow-down-rounded"
              ></use>
            </svg>
          </template>
        </PrimeButton>
      </PrimeButtonGroup>
      <PrimeMenu
        ref="menu_monitor"
        id="overlay_menu_monitor"
        :model="monitorItems"
        :popup="true"
        :style="{
          minWidth: '250px',
          marginTop: '6px',
        }"
        :pt="{
          root: 'bg-white! dark:bg-gray-800!',
          item: 'first:border-b first:border-b-gray-100 dark:first:border-gray-700 hover:bg-gray-100! dark:hover:bg-gray-900! transition duration-300',
        }"
      >
        <template #item="{ item, props }">
          <NuxtLink
            :to="localePath(item.path)"
            class="flex items-center w-full gap-x-2 p-4"
          >
            <svg class="size-6">
              <use class="size-6" :href="item.icon"></use>
            </svg>
            <span
              v-if="locale === 'en'"
              v-text="`${t(item.label!.split(' ')[0])} ${t(item.label!.split(' ')[1])}`"
            ></span>
            <span
              v-else
              v-text="`${t(item.label!.split(' ')[1])} ${t(item.label!.split(' ')[0])}`"
            ></span>
          </NuxtLink>
        </template>
      </PrimeMenu>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
      <div>
        <h2 class="text-2xl font-semibold">
          <span v-text="t('monitors.title')"></span>
        </h2>
        <p class="my-2 text-xl" v-text="t('monitors.description')"></p>
        <p class="my-3 text-xl" v-text="t('monitors.description-second')"></p>
      </div>
    </div>
    <PrimeButton
      severity="success"
      :pt="{
        root: 'mx-auto! rounded-md! p-0!',
      }"
      name="create"
    >
      <NuxtLink
        :to="`${localePath({
          path: '/dashboard/monitors/new/http',
        })}`"
        class="font-semibold px-20 py-2"
      >
        <span v-if="locale === 'en'">
          {{
            `${t("general.create")} ${t("general.your")}  ${t(
              "general.first"
            )} ${t("general.monitor")}`
          }}
        </span>
        <span v-else>{{
          `${t("general.first")} ${t("general.monitor")}  ${t(
            "general.your"
          )} ${t("general.create")}`
        }}</span>
      </NuxtLink>
    </PrimeButton>
  </div>
</template>

<style lang="postcss" scoped>
.divider__button::before {
  border-inline-start-color: var(--p-green-600);
}
.dark .divider__button::before {
  border-inline-start-color: var(--p-primary-600);
}
</style>
