<script lang="ts" setup>
import type { ShallowRef } from "vue";
import { headerMegaMenu, headerMegaMenuTeamItems, resources } from "~/types";
const { locale, t } = useI18n();
const useApp = useAppStore();
useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "dark" ? "dark" : "",
    ],
    lang: locale.value,
  },
});
const sideNavMenu: ShallowRef<boolean> = shallowRef<boolean>(false);
const conversationComponent = defineAsyncComponent(
  () => import("@/components/base/Conversation.vue")
);
const conversation: ShallowRef<boolean> = shallowRef<boolean>(false);

//functions
</script>
<template>
  <div class="root-element-page overflow-x-hidden overflow-y-auto h-screen">
    <slot name="header">
      <base-header
        logo
        @show-sideNav="sideNavMenu = !sideNavMenu"
        :side-nav-active="sideNavMenu"
      />
    </slot>
    <main class="main">
      <div class="overflow-hidden">
        <div class="page-animation">
          <slot />
        </div>
        <!-- <NuxtLazyHydrate when-visible> -->
        <PrimeDrawer
          v-model:visible="sideNavMenu"
          class="!w-full h-[calc(100vh-5rem)] top-[5rem] overflow-x-hidden !overflow-y-auto"
          :pt="{
            header: '!hidden',
            mask: '!bg-transparent',
            root: '!bg-gray-100 dark:!bg-gray-900',
          }"
        >
          <BaseSideNavMenu
            :items="headerMegaMenu"
            :subItems="headerMegaMenuTeamItems"
          />
        </PrimeDrawer>
        <!-- </NuxtLazyHydrate> -->
      </div>
    </main>
    <slot name="footer">
      <!-- TODO hidration mismatch -->
      <BaseFooterSection
        :monitoring="[headerMegaMenu[0]]"
        :teams="[headerMegaMenuTeamItems[0]]"
        :resources="[resources[0]]"
      />
    </slot>
    <div v-click-outside="() => (conversation = false)">
      <button
        :dir="locale === 'en' ? 'ltr' : 'rtl'"
        class="fixed bottom-5 z-10 bg-white dark:bg-gray-800 w-14 h-14 flex items-center justify-center shadow-xl ltr:rounded-l-full ltr:rounded-br-full ltr:right-6 rtl:rounded-r-full rtl:rounded-bl-full rtl:left-6"
        @click="conversation = !conversation"
        aria-label="conversation"
      >
        <svg
          width="2rem"
          height="2rem"
          class="text-green-500 dark:text-primary-500"
        >
          <use
            width="2rem"
            height="2rem"
            :href="`/img/icons.svg#chatbox-outline-${
              locale === 'en' ? 'left' : 'right'
            }`"
          ></use>
        </svg>
      </button>
      <Transition name="drop-drawer">
        <div
          v-if="conversation"
          class="conversation-modal"
          :dir="locale === 'en' ? 'ltr' : 'rtl'"
        >
          <Suspense>
            <conversationComponent
              @handle-close="() => (conversation = false)"
            />
            <template #fallback>
              <div class="pt-5 h-full">
                <div class="w-[90%] mx-auto h-[32%]">
                  <div class="flex items-center justify-between mt-2">
                    <PrimeSkeleton shape="circle" size="2rem"></PrimeSkeleton>
                    <PrimeSkeleton shape="circle" size="2rem"></PrimeSkeleton>
                  </div>

                  <div class="mt-5">
                    <PrimeSkeleton width="15rem"></PrimeSkeleton>
                    <PrimeSkeleton width="9rem" class="my-3"></PrimeSkeleton>
                  </div>
                  <div class="mt-2 flex">
                    <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
                    <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
                    <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
                    <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
                  </div>
                </div>
                <div class="h-[68.5%] relative">
                  <div class="flex w-full p-3">
                    <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
                    <div
                      class="flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"
                    >
                      <div class="flex justify-between w-full">
                        <PrimeSkeleton width="5rem"></PrimeSkeleton>
                        <PrimeSkeleton width="5rem"></PrimeSkeleton>
                      </div>
                      <PrimeSkeleton width="6rem" class="mt-3"></PrimeSkeleton>
                    </div>
                  </div>
                  <div class="absolute bottom-7 mx-auto left-0 right-0 w-[80%]">
                    <PrimeSkeleton width="100%" height="2.9rem"></PrimeSkeleton>
                  </div>
                </div>
              </div>
            </template>
          </Suspense>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
