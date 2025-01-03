<script lang="ts" setup>
import { headerMegaMenu } from "~/types/menu";
import { headerMegaMenuTeamItems } from "~/types/menu";

const props = withDefaults(
  defineProps<{
    logo?: boolean;
    signSection?: boolean;
    menuSection?: boolean;
    sideNavActive?: boolean;
  }>(),
  {
    logo: false,
    signSection: false,
    menuSection: false,
    sideNavActive: false,
  }
);

const useApp = useAppStore();
const menu_language = ref();
const { locale, locales, setLocale, t } = useI18n();
const localePath = useLocalePath();
const headerMenuActive = ref<boolean>(false);
const header = useTemplateRef("header");

const toggle = (event: Event) => {
  menu_language.value.toggle(event);
};

// if (import.meta.client) {
//   document.onscroll = (event) => set_shadow();
// }
onMounted(() => {
  if (props.signSection) {
    const mainElement = document.querySelector("main.main") as HTMLElement;
    const rootElement = document.querySelector(
      ".root-element-page"
    ) as HTMLElement;
    mainElement.addEventListener("scroll", (e) => {
      set_shadow(e.target as HTMLElement);
    });
    rootElement.addEventListener("scroll", (e) => {
      set_shadow(e.target as HTMLElement);
    });
  }
});

function set_shadow(el: HTMLElement) {
  if (el.scrollTop > 0) {
    header.value!.classList.add("shadow-xl");
    header.value!.classList.remove("lg:mt-10");
    header.value!.classList.add("lg:!mt-0");
  } else {
    header.value!.classList.remove("shadow-xl");
    header.value!.classList.remove("lg:!mt-0");
    header.value!.classList.add("lg:mt-10");
  }
}
</script>

<template>
  <header
    ref="header"
    class="header"
    :class="{ 'min-h-20 max-lg:shadow-xl': signSection }"
  >
    <div class="container mx-auto px-10 flex items-center xl:justify-between">
      <div
        class="flex flex-nowrap items-center justify-between pt-1 mx-5 md:mx-0"
      >
        <div class="flex items-center">
          <NuxtLink :to="localePath('index')" v-if="logo">
            <div
              class="w-3 h-3 rounded-full bg-green-500 dark:bg-primary-500 inline-block"
            ></div>
            <h1
              v-text="t('general.UptimeRobot')"
              class="!inline-block mx-[3px]"
            ></h1>
          </NuxtLink>
          <PrimeButton
            class="w-[3.5rem] h-6 md:!inline-flex shadow"
            :class="{ 'ml-10': locale === 'en', 'mr-10': locale === 'fa' }"
            @click="toggle"
            severity="secondary"
            aria-haspopup="true"
            aria-controls="overlay_language_menu"
            :style="{ display: 'none' }"
          >
            <PrimeImage
              :src="useApp.getLocaleOject.logo"
              :alt="useApp.getLocaleOject.code"
              class="mx-1"
              unstyled
            />
          </PrimeButton>
          <PrimeMenu
            ref="menu_language"
            id="overlay_language_menu"
            :model="locales"
            :popup="true"
            :style="{
              minWidth: 0,
              marginTop: '3px',
            }"
          >
            <template #item="{ item, props }">
              <PrimeButton
                @click="setLocale(item.code)"
                severity="success"
                :pt="{
                  root: '!w-[3.5rem] h-7 !text-sm !p-0',
                }"
              >
                <span v-text="item?.language"></span>
              </PrimeButton>
            </template>
          </PrimeMenu>
          <section id="toggle-theme" class="hidden md:block mx-2 h-6">
            <PrimeToggleSwitch v-model="useApp.isDarkTheme">
              <template #handle="{ checked }">
                <i
                  :class="{
                    checked: useApp.isDarkTheme,
                    'content-sun': !checked,
                    'content-moon': checked,
                  }"
                />
              </template>
            </PrimeToggleSwitch>
          </section>
        </div>
      </div>
      <BaseMegaMenu
        v-if="menuSection"
        :active="headerMenuActive"
        :items="headerMegaMenu"
        :subItems="headerMegaMenuTeamItems"
        class="hidden lg:block lg:w-[50%] xl:w-[52%] mx-auto"
      >
      </BaseMegaMenu>
      <section v-if="signSection" class="sign hidden sm:block">
        <PrimeButton class="!bg-transparent !border-none !h-fit !p-0">
          <NuxtLink
            :to="localePath('login')"
            v-text="t('general.log_in')"
            class="hidden xl:block font-semibold text-gray-900 hover:!text-green-500 dark:!text-white mx-6 dark:hover:!text-primary-500"
          ></NuxtLink>
        </PrimeButton>
        <PrimeButton severity="success" :pt="{ root: '!p-0' }">
          <NuxtLink
            :to="localePath('register')"
            v-text="t('general.sign_out')"
            class="font-semibold px-8 py-2"
          ></NuxtLink>
        </PrimeButton>
      </section>
    </div>
    <ClientOnly>
      <PrimeButton
        v-if="signSection"
        class="inline-block lg:!hidden"
        :pt="{
          root: '!bg-transparent !hover:bg-transparent !border-none !rounded-none !h-[2rem] !w-[3rem] !p-0 mx-10',
        }"
        @click="$emit('show-sideNav')"
      >
        <svg
          width="3rem"
          height="3rem"
          class="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"
        >
          <Transition name="fade">
            <use
              v-if="sideNavActive"
              width="3rem"
              height="3rem"
              href="/img/icons.svg#close"
            ></use>
            <use
              v-else
              width="3rem"
              height="3rem"
              href="/img/icons.svg#menu"
            ></use>
          </Transition>
        </svg>
      </PrimeButton>
    </ClientOnly>
  </header>
</template>

<style lang="postcss">
.header {
  @apply sticky top-0 lg:-top-1 bg-gray-100 dark:bg-gray-900 lg:mt-10 z-20 flex items-center transition-all;
}
</style>
