<script lang="ts" setup>
const useApp = useAppStore();
const { locale, locales, t, setLocale } = useI18n();
const menu_language = useTemplateRef("menu_language");
useHead({
  titleTemplate: `${t("general.UptimeRobot")} - %s`,
  htmlAttrs: {
    class: [
      locale.value == "fa" ? "rtl fa" : "ltr en",
      useApp.state.theme === "dark" ? "dark" : "",
    ],
  },
});

const toggle = (event: Event) => {
  menu_language.value?.toggle(event);
};
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="h-screen transition-all overflow-y-auto">
    <div
      class="container mx-auto w-100 md:w-11/12 max-w-[1500px] page-animation"
    >
      <div class="flex items-center mt-10">
        <PrimeButton
          class="w-[3.5rem] h-6 md:inline-flex! shadow-sm"
          :class="{ 'ml-10': locale === 'en', 'mr-10': locale === 'fa' }"
          @click="toggle"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="overlay_language_menu"
          :style="{ display: 'none' }"
          name="locale"
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
                root: 'w-[3.5rem]! h-7 text-sm! p-0!',
              }"
              name="setLocale"
            >
              <span v-text="item?.language"></span>
            </PrimeButton>
          </template>
        </PrimeMenu>
        <section id="toggle-theme" class="hidden md:block mx-2 h-6">
          <PrimeToggleSwitch
            v-model="useApp.isDarkTheme"
            aria-label="switch-theme"
          >
            <template #handle="{ checked }">
              <i
                :class="{
                  checked: useApp.isDarkTheme,
                  'content-(--content-sun)': !checked,
                  'content-(--content-moon)': checked,
                }"
              />
            </template>
          </PrimeToggleSwitch>
        </section>
      </div>
      <main class="w-full">
        <div
          class="columns-1 w-full md:w-2/3 xl:w-2/5 max-md:px-4 mx-auto mt-5 max-md:pt-32"
        >
          <slot name="header">
            <h1 v-text="t('general.UptimeRobot')" class="text-center"></h1>
          </slot>
          <slot />
        </div>
      </main>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
