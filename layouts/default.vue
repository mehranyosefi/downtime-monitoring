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
    <button
      class="fixed bottom-5 z-20 bg-white dark:bg-gray-800 w-14 h-14 flex items-center justify-center hover:shadow-md hover:bg-white/70 dark:hover:bg-gray-800/70"
      :class="{
        'rounded-l-full rounded-br-full right-6': locale === 'en',
        'rounded-r-full rounded-bl-full  left-6': locale !== 'en',
      }"
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
  </div>
</template>

<style lang="postcss" scoped></style>
