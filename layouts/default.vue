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
  <div>
    <base-header
      sign-section
      menu-section
      logo
      @show-sideNav="sideNav?.toggle_sideNav"
      :side-nav-active="sideNav?.sideNavActive"
    />
    <main>
      <slot />
      <BaseSideNavMenu
        :items="headerMegaMenuItems"
        :subItems="headerMegaMenuFooterItems"
        ref="sideNav"
      />
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="postcss" scoped></style>
