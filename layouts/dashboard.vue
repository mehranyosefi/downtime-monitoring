<script lang="ts" setup>
import { dashboardMenu } from "~/types";

const { locale, t, setLocale } = useI18n();
const useApp = useAppStore();
const user = useUserStore();
const localePath = useLocalePath();
const userMenuItems: {
  label: string;
  icon: string;
  action: string | null;
  items?: any[];
}[] = [
  {
    label: "general.language",
    icon: "/img/icons.svg#languages",
    action: null,
    items: [
      {
        label: "en-US",
        icon: null,
        command: () => setLocale("en"),
      },
      {
        label: "fa-IR",
        icon: null,
        command: () => setLocale("fa"),
      },
    ],
  },
  {
    label: "general.account general.details",
    icon: "/img/icons.svg#user",
    action: "",
  },
  {
    label: "general.logout",
    icon: "/img/icons.svg#outline-logout",
    action: "user.logOut()",
  },
];

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

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "",
  }
);

const useWindow = useWindowProperty();
const sideBarItems = ref(dashboardMenu.slice(0, 4));

// const sideBarItems = computed(() => {
//   if (useWindow.isOnMobile.value) {
//     return dashboardMenu.slice(0, 4);
//   } else {
//     return dashboardMenu.filter((item) => item.path);
//   }
// });
const conversation = shallowRef<boolean>(false);
const userMenuActive = shallowRef<boolean>(false);
const menu_user = useTemplateRef("menu_user");

onMounted(() => {
  watch(
    () => useWindow.isOnMobile.value,
    () => {
      if (useWindow.isOnMobile.value) {
        sideBarItems.value = dashboardMenu.slice(0, 4);
      } else {
        sideBarItems.value = dashboardMenu.filter((item) => item.path);
      }
    },
    { immediate: true }
  );
});

const toggle = (event: Event) => {
  menu_user.value?.toggle(event);
  userMenuActive.value = !userMenuActive.value;
};

function handleClikMenuItem(action: string | null) {
  if (action) eval(action);
}
</script>

<template>
  <div class="root-element-page overflow-x-hidden overflow-y-auto h-screen">
    <div
      class="w-full xs:w-[calc(100%-4rem)] lg:w-[calc(100%-13rem)]"
      :class="{
        'xs:ml-16 lg:ml-52': locale === 'en',
        'xs:mr-16 lg:mr-52': locale === 'fa',
      }"
    >
      <header>
        <div
          class="flex justify-center items-baseline bg-white dark:bg-gray-800 py-4 xs:hidden"
        >
          <div
            class="w-2 h-2 rounded-full bg-green-500 dark:bg-primary-500 inline-block"
          ></div>
          <span
            v-text="t('general.UptimeRobot')"
            class="inline-block! text-2xl font-semibold mx-[3px]"
          ></span>
        </div>
      </header>

      <main class="page-animation">
        <slot />
      </main>
    </div>

    <DashboardSideBar
      :items="sideBarItems"
      class="xs:flex flex-col xs:w-16 lg:px-2 lg:w-52"
    >
      <template #prepend>
        <nuxt-link
          :to="localePath('dashboard-monitors')"
          class="hidden xs:block text-center my-5"
        >
          <div class="circle-shadow mx-auto lg:hidden"></div>
          <div class="max-lg:hidden">
            <div
              class="w-3 h-3 rounded-full bg-green-500 dark:bg-primary-500 inline-block"
            ></div>
            <h1
              v-text="t('general.UptimeRobot')"
              class="inline-block! mx-[3px] text-2xl"
            ></h1>
          </div>
        </nuxt-link>
      </template>
      <template #append>
        <div class="mt-auto mb-20 hidden xs:block">
          <PrimeButton
            severity="secondary"
            :class="{ '!bg-gray-200 dark:!bg-gray-800': userMenuActive }"
            :pt="{
              root: '!rounded-md !border-none w-full !py-4 !items-center',
            }"
            @click="toggle"
          >
            <span v-text="user.state.user?.fullName"></span>
            <svg class="size-7">
              <use href="/img/icons.svg#dots-solid"></use>
            </svg>
          </PrimeButton>
          <PrimeTieredMenu
            ref="menu_user"
            :model="userMenuItems"
            :popup="true"
            :pt="{
              root: '!min-w-auto !w-42 ltr:!left-16 ltr:lg:!left-52 rtl:!right-16 rtl:lg:!right-52',
              itemIcon: '!bg-gray-500',
            }"
            @hide="userMenuActive = false"
            :dir="useApp.dir"
          >
            <template #start>
              <PrimeToggleSwitch
                v-model="useApp.isDarkTheme"
                aria-label="switch-theme"
                :pt="{
                  root: 'rounded-2xl!',
                  handle: 'rounded-2xl!',
                  input: 'rounded-2xl!',
                  slider: 'rounded-sm!',
                }"
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
            </template>
            <template #item="{ item, props, hasSubmenu }">
              <PrimeButton
                severity="secondary"
                outlined
                :pt="{
                  root: 'w-full !justify-start !rounded !border-none',
                }"
                @click="handleClikMenuItem(item.action)"
              >
                <svg class="size-5">
                  <use :href="item.icon"></use>
                </svg>
                <span
                  v-if="locale === 'en'"
                  v-text="
                      `${t(item.label!.split(' ')[0])} ${
                        item.label!.includes(' ')
                          ? t(item.label!.split(' ')[1])
                          : ''
                      }`
                    "
                ></span>
                <span
                  v-else
                  v-text="
                      `${
                        item.label!.includes(' ')
                          ? t(item.label!.split(' ')[1]) + ' '+ t(item.label!.split(' ')[0])
                          : t(item.label!.split(' ')[0])
                      }`
                    "
                ></span>
                <svg v-if="hasSubmenu" class="size-5">
                  <use
                    :href="`/img/icons.svg#${
                      locale === 'en' ? 'right' : 'left'
                    }-rounded`"
                  ></use>
                </svg>
              </PrimeButton>
            </template>
          </PrimeTieredMenu>
        </div>
      </template>
    </DashboardSideBar>
    <UiChat
      class="chat"
      :active="conversation"
      @trigger-active="(val:boolean)=>conversation = val"
    />
  </div>
</template>

<style scoped>
@reference "~/assets/styles/main.css";

.chat :deep(.activator) {
  @apply max-md:bottom-26;
}
</style>
