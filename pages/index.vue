<script lang="ts" setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
import type { Reactive } from "vue";
import { headerMegaMenuItems } from "~/types/menu";
import { infiniteScrolling } from "~/utility";

definePageMeta({
  layout: false,
});
useHead({
  title: t("phrases.seo.index.title"),
  meta: [
    { name: "description", content: t("phrases.seo.signUp.description") },
    { name: "keywords", content: t("phrases.seo.signUp.keywords") },
  ],
});
const useApp = useAppStore();
const { isOnMobile } = useWindowProperty();
const templateSections = ref<{ [key: string]: boolean }>({
  cardItems: false,
  trust: false,
});
onMounted(() => {
  infiniteScrolling(
    ".root-element-page",
    templateSections.value,
    (items: { [key: string]: boolean }) => {
      templateSections.value = items;
    }
  );
  // sections.value = reactiveSection;
});
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div
        class="container h-screen overflow-y-auto mx-auto px-10"
        id="container"
      >
        <div class="grid grid-row-2 lg:grid-cols-2 pt-20">
          <div class="w-fit mx-auto">
            <h4 v-if="locale == 'en'" class="text-6xl font-semibold">
              {{ `${t("index.serviceTitle.one")}` }} <br />
              <span class="text-green-500 dark:text-primary-500">
                {{ `${t("general.uptime")} ${t("general.monitoring")}` }}
              </span>
              service.
            </h4>
            <h4 v-else class="text-6xl font-semibold leading-relaxed">
              {{ `${t("index.serviceTitle.one")}` }} <br />
              <span class="text-green-500 dark:text-primary-500">
                {{ `${t("index.serviceTitle.two")}` }}
              </span>
            </h4>
            <p class="my-8 text-xl font-semibold">
              {{ `${t("index.getTitle")}` }}
              <span class="text-green-500 dark:text-primary-500"
                >{{ `${t("general.totally")} ` }}
                <span v-text="t('general.free')" class="uppercase"></span></span
              >.
            </p>
            <PrimeButton
              severity="success"
              :pt="{
                root: '!px-20 !py-4 !mx-auto',
              }"
            >
              <NuxtLink
                :to="`${localePath('index')}#`"
                class="font-semibold"
                v-text="t('index.startMonitoring')"
              ></NuxtLink>
            </PrimeButton>
          </div>

          <div class="mt-10 lg:mt-0 w-fit mx-auto">
            <i
              class="w-[26rem] md:w-[30rem]"
              :class="{
                'content-darkIndex': useApp.isDarkTheme,
                'content-lightIndex': !useApp.isDarkTheme,
              }"
            ></i>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-800 dark:bg-gray-100 mt-56 text-gray-100 dark:text-gray-900 transition-colors"
      >
        <div class="container mx-auto px-10 pb-20">
          <h4 class="w-fit mx-auto text-4xl font-semibold pt-28 md:pt-16 h-20">
            {{ t("index.careAbout") }} <br />
            <span v-if="locale == 'fa'" class="leading-normal">
              {{ t("phrases.etc.inOnePlace") }}
              <span
                class="text-green-500 dark:text-primary-500"
                v-text="t('general.monitored')"
              ></span
              >.
            </span>
            <span v-else>
              <span
                class="text-green-500 dark:text-primary-500"
                v-text="t('general.monitored')"
              ></span>
              {{ t("phrases.etc.inOnePlace") }}.
            </span>
          </h4>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-56 md-pt-20"
            v-if="templateSections.cardItems"
            v-animate
          >
            <PrimeCard
              v-for="(i, key) in headerMegaMenuItems[0].items"
              :key="key"
              class="shadow-md bg-white p-2 animate"
              :style="{
                ...(isOnMobile && {
                  ...(key === 0 && { 'animation-duration': '.2s' }),
                  ...(key === 1 && { 'animation-duration': '1.2s' }),
                  ...(key === 2 && { 'animation-duration': '1.7s' }),
                }),
              }"
            >
              <template #title>
                <svg
                  width="5rem"
                  height="5rem"
                  class="text-green-500 dark:text-primary-500"
                >
                  <use :href="i.icon" width="5rem" height="5rem"></use>
                </svg>
                <h5 v-text="t(i.label)" class="font-bold text-2xl mt-2"></h5>
              </template>
              <template #content>
                <p v-text="i.content" class="text-lg"></p>
                <PrimeButton
                  severity="success"
                  class="mt-2"
                  :label="t(i.label)"
                >
                </PrimeButton>
              </template>
            </PrimeCard>
          </div>
          <div class="h-[10vh]" v-if="templateSections.trust"></div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped></style>
