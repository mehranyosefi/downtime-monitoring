<script setup lang="ts">
import { notificatoins } from "~/types/menu";
import { finiteScrolling } from "~/utility";
// definePageMeta({
//   pageTransition: {
//     name: "page",
//   },
// });
const { t, locale } = useI18n();
const showTextOver = ref<boolean>(false);
const useApp = useAppStore();
</script>
<template>
  <div>
    <NuxtLayout name="default">
      <div class="container mx-auto px-10">
        <div class="text-center my-20">
          <h2 class="text-5xl font-extrabold leading-[1.2]">
            <span v-text="t('integrations.title.episode-1')"></span> <br />
            <span
              v-text="t('integrations.title.episode-2')"
              class="text-green-500 dark:text-primary-500"
            ></span>
          </h2>
          <p class="mt-10 text-xl">
            <span v-text="t('integrations.subTitle')"></span>
          </p>
        </div>
      </div>
      <div
        class="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 transition-colors"
      >
        <div class="container mx-auto px-10 py-16">
          <div class="pb-16">
            <h3 class="text-4xl font-semibold text-center">
              <span v-if="locale === 'en'"
                ><span class="capitalize" v-text="t('general.personal')"></span
                >{{
                  ` ${t("general.notification")} ${t("general.channels")}`
                }}</span
              >
              <span v-else>
                {{
                  `${t("general.channels")}ی ${t("general.notification")}
              ${t("general.personal")}`
                }}
              </span>
            </h3>
          </div>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 justify-center"
          >
            <Primecard
              v-for="(notif, key) in notificatoins"
              :key="key"
              class="shadow-md p-2"
              :pt="{
                root: 'w-60 m-auto',
                body: '!p-1',
                content: 'text-center',
              }"
            >
              <template #content>
                <Transition
                  name="fade"
                  tag="dev"
                  class="h-[100px] flex flex-col items-center justify-center"
                  mode="out-in"
                >
                  <div v-if="!showTextOver" key="1">
                    <svg
                      width="4rem"
                      height="4rem"
                      class="text-green-500 dark:text-primary-500"
                    >
                      <use width="4rem" height="4rem" :href="notif.icon"></use>
                    </svg>

                    <span
                      v-text="t(notif.label)"
                      class="text-lg font-extrabold pt-1"
                    ></span>
                  </div>
                  <p v-else key="2" class="cursor-text">
                    textjgjerhr dgdfht <br />khdgvghjjlk
                  </p>
                </Transition>
              </template>
            </Primecard>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 min-h-screen content-center pb-44 transition-all"
      >
        <div class="container mx-auto px-10">
          <div
            class="flex flex-col lg:flex-row justify-center lg:justify-around items-center"
          >
            <div class="mt-60 md:mt-80 lg:mt-auto w-full order-2 lg:order-1">
              <h4
                class="text-5xl font-semibold leading-tight"
                :class="{ 'lg:pr-10': locale === 'en' }"
              >
                {{ t("integrations.statusPage.title") }}
                <span v-if="locale === 'en'">the</span>
                <span class="text-green-500 dark:text-primary-500 inline-flex">
                  <span
                    v-text="t('general.status')"
                    class="mx-2"
                    :class="{ 'order-2': locale !== 'en' }"
                  ></span
                  ><span
                    :class="{ 'order-1': locale !== 'en' }"
                    v-text="t('general.page')"
                  ></span></span
                >.
              </h4>
              <p
                class="my-4 text-xl"
                :class="{ 'pr-10': locale === 'en', 'pl-10': locale !== 'en' }"
              >
                {{ t("integrations.statusPage.subTitle") }}
              </p>

              <nuxt-link
                to="/"
                class="text-green-500 dark:text-primary-500 text-lg font-bold underline underline-offset-8"
              >
                {{ t("integrations.statusPage.check") }}
              </nuxt-link>
            </div>
            <div
              class="relative lg:-top-10 xl:-top-0 flex w-full order-1 lg:order-2"
            >
              <div
                class="absolute max-xl:top-5 rounded-full bg-green-500 dark:bg-blue-500 h-[70vw] w-[70vw] lg:h-[31rem] lg:w-[31rem] xl:h-[35rem] xl:w-[35rem] lg:right-0 max-lg:-right-[45vw]"
                :class="{
                  'lg:left-0 !right-auto max-lg:-left-[45vw]': locale === 'fa',
                }"
              ></div>
              <div
                class="relative rounded-lg p-4 bg-white dark:bg-gray-800 w-full top-[14vw] lg:w-[36rem] lg:h-[19rem] xl:w-[40rem] xl:h-[23rem] z-10 lg:right-[1.5rem] 2xl:-right-[2.5rem] lg:top-[7.5rem] xl:top-[6.5rem]"
                :class="{
                  '!right-auto lg:left-[2rem] 2xl:-left-[2.5rem]':
                    locale === 'fa',
                }"
                v-animation-on-viewport="
                  locale == 'en' ? 'slide-right' : 'slide-left'
                "
              >
                <i
                  class="w-full h-full p-3 content-serviceStatus"
                  :class="{
                    'content-serviceStatusDark': useApp.isDarkTheme,
                    'content-serviceStatus': !useApp.isDarkTheme,
                  }"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<style lang="postcss" scoped></style>
