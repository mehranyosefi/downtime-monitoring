<script lang="ts" setup>
import { headerMegaMenu } from "~/types/menu";
import { headerMegaMenuTeamItems } from "~/types/menu";
import { resources } from "~/types/menu";
const { locale, t } = useI18n();
const useApp = useAppStore();
useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "dark" ? "dark" : "",
    ],
  },
});
const sideNav = useTemplateRef("sideNav");
const conversationComponent = defineAsyncComponent(
  () => import("@/components/base/Conversation.vue")
);
const conversation = ref<boolean>(false);

//functions
</script>
<template>
  <div class="root-element-page overflow-x-hidden overflow-y-auto h-screen">
    <slot name="header">
      <base-header
        sign-section
        menu-section
        logo
        @show-sideNav="sideNav?.toggle_sideNav"
        :side-nav-active="sideNav?.sideNavActive"
      />
    </slot>
    <main class="main">
      <div class="overflow-hidden">
        <div class="page-animation">
          <slot />
        </div>
        <NuxtLazyHydrate :on-interaction="['click', 'touchstart']">
          <BaseSideNavMenu
            :items="headerMegaMenu"
            :subItems="headerMegaMenuTeamItems"
            ref="sideNav"
          />
        </NuxtLazyHydrate>
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
        class="fixed bottom-5 z-10 bg-white dark:bg-gray-800 w-14 h-14 flex items-center justify-center hover:shadow-md ltr:rounded-l-full ltr:rounded-br-full ltr:right-6 rtl:rounded-r-full rtl:rounded-bl-full rtl:left-6"
        @click="conversation = !conversation"
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
            <template #fallback> Loading... </template>
          </Suspense>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
