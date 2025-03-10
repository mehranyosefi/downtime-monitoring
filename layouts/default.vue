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
          :position="locale === 'fa' ? 'right' : 'left'"
          class="w-full! h-[calc(100vh-5rem)] top-[5rem] overflow-x-hidden overflow-y-auto!"
          :pt="{
            header: 'hidden!',
            mask: 'bg-transparent!',
            root: 'bg-gray-100! dark:bg-gray-900!',
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
    <chat
      :active="conversation"
      @trigger-active="(val:boolean)=>conversation = val"
    ></chat>
  </div>
</template>

<style lang="postcss" scoped></style>
