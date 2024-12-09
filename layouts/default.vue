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
      <footer class="transition-colors h-[40vh] pt-16">
        <div class="container mx-auto px-10">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10">
            <div
              class="py-[.15rem]"
              :class="[locale === 'en' ? 'ml-20' : 'mr-20']"
            >
              <h5
                class="font-bold text-2xl"
                v-text="t('general.UptimeRobot')"
              ></h5>
              <p class="text-lg my-2" v-text="t('footer.donwntimehappens')"></p>
              <p
                class="w-4/5 text-gray-600 font-medium dark:text-gray-400 text-base"
                v-text="t('footer.description')"
              ></p>
              <div class="flex items-center mt-4">
                <NuxtLink to="#facebook" class="mr-1">
                  <svg
                    width="2.1rem"
                    height="2.1rem"
                    class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                  >
                    <use
                      width="2.1rem"
                      height="2.1rem"
                      href="/public/img/icons.svg/#facebook"
                    ></use>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  class="bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center p-[.38rem] mx-1"
                  to="#twitter"
                >
                  <svg
                    width="1.22rem"
                    height="1.22rem"
                    class="text-gray-100 dark:text-balck"
                  >
                    <use
                      width="1.2rem"
                      height="1.2rem"
                      href="/public/img/icons.svg/#twitter"
                    ></use>
                  </svg>
                </NuxtLink>
                <NuxtLink to="#linkedin" class="mx-1">
                  <svg
                    width="2.1rem"
                    height="2.1rem"
                    class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                  >
                    <use
                      width="2.1rem"
                      height="2.1rem"
                      href="/public/img/icons.svg/#linkedin"
                    ></use>
                  </svg>
                </NuxtLink>
                <NuxtLink to="#telegram" class="mx-1">
                  <svg
                    width="2rem"
                    height="2rem"
                    class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                  >
                    <use
                      width="2rem"
                      height="2rem"
                      href="/public/img/icons.svg/#telegram"
                    ></use>
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <PrimeDivider :pt="{ root: 'md:!hidden' }" />
            <PrimeMenu
              :model="[headerMegaMenu[0]]"
              :pt="{
                root: '!border-none !rounded-none',
                submenuLabel: '!p-0 mb-2 font-bold text-2xl',
                item: 'text-xl py-1 my-2',
                itemContent:
                  'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4',

                itemIcon: '!hidden',
              }"
              :class="[locale === 'en' ? '!ml-20' : '!mr-20']"
            >
              <template #submenulabel="{ item }">
                <h5 v-text="t(item.label)"></h5>
              </template>
              <template #item="{ item }">
                <NuxtLink :to="item.path">
                  <span
                    class="text-base"
                    v-text="t(item.label as string)"
                  ></span>
                </NuxtLink>
              </template>
            </PrimeMenu>
            <PrimeDivider :pt="{ root: 'md:!hidden' }" />
            <PrimeMenu
              :model="[headerMegaMenuTeamItems[0]]"
              :pt="{
                root: '!border-none !rounded-none',
                submenuLabel: '!p-0 mb-2 font-bold text-2xl',
                item: 'text-xl py-1 my-2',
                itemContent:
                  'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4',
                itemIcon: '!hidden',
              }"
              :class="[locale === 'en' ? '!ml-20' : '!mr-20']"
            >
              <template #submenulabel="{ item }">
                <h5 class="capitalize" v-text="t('general.teams')"></h5>
              </template>
              <template #item="{ item }">
                <NuxtLink :to="item.path">
                  <span
                    class="text-base"
                    v-text="t(item.label as string)"
                  ></span>
                </NuxtLink>
              </template>
            </PrimeMenu>
            <PrimeDivider :pt="{ root: 'md:!hidden' }" />
            <PrimeMenu
              :model="[resources[0]]"
              :pt="{
                root: '!border-none !rounded-none',
                submenuLabel: '!p-0 mb-2 font-bold text-2xl',
                item: 'text-xl py-1 my-2',
                itemContent:
                  'hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4',
                itemIcon: '!hidden',
              }"
              :class="[locale === 'en' ? '!ml-20' : '!mr-20']"
            >
              <template #submenulabel="{ item }">
                <h5 class="capitalize" v-text="t(item.label)"></h5>
              </template>
              <template #item="{ item }">
                <NuxtLink :to="item.path">
                  <span
                    class="text-base"
                    v-text="t(item.label as string)"
                  ></span>
                </NuxtLink>
              </template>
            </PrimeMenu>
          </div>
        </div>
      </footer>
    </slot>
  </div>
</template>

<style lang="postcss" scoped></style>
