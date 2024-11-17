<script lang="ts" setup>
const useApp = useAppStore();
const menu_language = ref();
const { locale, locales, setLocale, t } = useI18n();

const menuItems = ref([
  {
    label: "monitoring",
    items: [
      [
        {
          label: "dfh",
          items: [
            [
              {
                label: "Living Room",
                items: [
                  { label: "Accessories" },
                  { label: "Armchair" },
                  { label: "Coffee Table" },
                  { label: "Couch" },
                  { label: "TV Stand" },
                ],
              },
            ],
          ],
        },
      ],
    ],
  },
]);

const toggle = (event: Event) => {
  menu_language.value.toggle(event);
};
</script>

<template>
  <div class="flex flex-nowrap items-center justify-between pt-12">
    <div class="flex items-center">
      <section class="languages">
        <PrimeButton
          class="py-2 !px-2 w-[4.6rem] md:w-44"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_language_menu"
        >
          <PrimeImage
            :src="useApp.getLocaleOject.logo"
            :alt="useApp.getLocaleOject.code"
            class="mx-1"
            unstyled
          />
          <span class="hidden md:block text-black dark:text-white">{{
            `${t("general.country." + useApp.getLocaleOject.countryName)}(${
              useApp.getLocaleOject?.language
            })`
          }}</span>
        </PrimeButton>
        <PrimeMenu
          ref="menu_language"
          id="overlay_language_menu"
          :model="locales"
          :popup="true"
          class="!mt-1 md:!w-44 !min-w-fit !rounded"
          :pt="{
            root: '!bg-transparent !border-gray-100 dark:!border-gray-700',
            list: '!p-0 rounded',
            itemContent: '!bg-transparent',
          }"
        >
          <template #item="{ item, props }">
            <PrimeButton
              @click="setLocale(item.code)"
              :pt="{
                root: 'w-full px-2 !text-sm !bg-gray-100 dark:!bg-gray-800/95 hover:!bg-gray-100/75 dark:hover:!bg-gray-700/75 shadow-lg dark:!text-white !border-none',
              }"
            >
              <span
                v-text="`${t('general.country.' + item.countryName)}`"
              ></span>
              <span
                class="hidden md:inline"
                v-text="`(${item?.language})`"
              ></span>
            </PrimeButton>
          </template>
        </PrimeMenu>
      </section>
      <section id="toggle-theme" class="mx-2 md:mx-5 h-6">
        <PrimeToggleSwitch
          v-model="useApp.getThemeState"
          :pt="{
            slider: [
              !useApp.getThemeState
                ? '!bg-gray-100 !border-gray-300'
                : '!bg-gray-800/95 !border-gray-700',
              'shadow-xl',
            ],
            handle: [
              !useApp.getThemeState ? '!bg-gray-300/70' : '!bg-gray-300',
            ],
          }"
        >
          <template #handle="{ checked }">
            <i
              :class="{
                checked: useApp.getThemeState,
                'content-sun': !checked,
                'content-moon': checked,
              }"
            />
          </template>
        </PrimeToggleSwitch>
      </section>
    </div>
    <PrimeMegaMenu
      :model="menuItems"
      :pt="{
        root: `!bg-transparent`,
      }"
    />
    <div class="bg-slate-100">login</div>
  </div>
</template>

<style scoped lang="postcss">
header {
  .p-megamenu {
    @apply border-none hover:!bg-transparent hover:!text-green-500;
    width: calc(70% - 19rem);
  }
}
</style>
