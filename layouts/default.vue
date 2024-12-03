<script lang="ts" setup>
import { headerMegaMenuItems } from "~/types/menu";
import { headerMegaMenuFooterItems } from "~/types/menu";

const { locale, t } = useI18n();
const useApp = useAppStore();
const localePath = useLocalePath();
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
  <div class="root-element-page h-screen overflow-y-auto">
    <base-header
      sign-section
      menu-section
      logo
      @show-sideNav="sideNav?.toggle_sideNav"
      :side-nav-active="sideNav?.sideNavActive"
    />
    <main>
      <slot />
      <NuxtLazyHydrate :on-interaction="['click', 'touchstart']">
        <BaseSideNavMenu
          :items="headerMegaMenuItems"
          :subItems="headerMegaMenuFooterItems"
          ref="sideNav"
        />
      </NuxtLazyHydrate>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="postcss" scoped></style>
