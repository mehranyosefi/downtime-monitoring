<script lang="ts" setup>
import { headerMegaMenu } from "~/types/menu";
import { headerMegaMenuTeamItems } from "~/types/menu";
import { resources } from "~/types/menu";

const { locale, t } = useI18n();
const useApp = useAppStore();
const overflowAuto = ref<boolean>(false);

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
    <main class="main overflow-xhidden overflow-y-auto h-[120vh]">
      <div class="overflow-hidden">
        <slot />
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
  </div>
</template>

<style lang="postcss" scoped></style>
