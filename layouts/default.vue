<script lang="ts" setup>
import { headerMegaMenu } from "~/types/menu";
import { headerMegaMenuTeamItems } from "~/types/menu";
import { resources } from "~/types/menu";

withDefaults(
  defineProps<{
    scrollable?: boolean;
  }>(),
  {
    scrollable: true,
  }
);
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
const mainIsScrollable = ref<boolean>(true);
onMounted(() => {
  const root = document.querySelector("div.root-element-page") as HTMLElement;
  root.onscroll = (e) => {
    const el = e.target! as HTMLElement;
    if (el.scrollTop > 20) {
      mainIsScrollable.value = false;
    } else {
      mainIsScrollable.value = true;
    }
  };
});

//functions
</script>
<template>
  <div
    class="root-element-page overflow-x-hidden h-screen"
    :class="{ 'overflow-y-auto': scrollable, 'overflow-y-hidden': !scrollable }"
  >
    <slot name="header">
      <base-header
        sign-section
        menu-section
        logo
        @show-sideNav="sideNav?.toggle_sideNav"
        :side-nav-active="sideNav?.sideNavActive"
      />
    </slot>
    <main
      class="main overflow-x-hidden h-[120vh]"
      :class="{
        'overflow-y-auto': mainIsScrollable,
        'overflow-y-hidden': !mainIsScrollable,
      }"
    >
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
