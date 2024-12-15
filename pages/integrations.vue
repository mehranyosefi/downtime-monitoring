<script setup lang="ts">
import { notificatoins } from "~/types/menu";
import { finiteScrolling } from "~/utility";
definePageMeta({
  pageTransition: {
    name: "page",
  },
});
const { t, locale } = useI18n();
const layoutIsScrollable = ref<boolean>(false);
const showTextOver = ref<boolean>(false);

onMounted(() => {
  finiteScrolling(".main", null, (items, isEnd) => {
    layoutIsScrollable.value = isEnd;
  });
});
</script>
<template>
  <NuxtLayout name="default" :scrollable="layoutIsScrollable">
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
  </NuxtLayout>
</template>
<style lang="postcss" scoped></style>
