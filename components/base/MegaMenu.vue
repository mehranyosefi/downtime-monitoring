<script lang="ts" setup>
import "primeicons/primeicons.css";
import type { MegaMenuInterface } from "~/types/menu";

const props = defineProps<{
  items: MegaMenuInterface[];
  subItems?: MegaMenuInterface[];
}>();

const { t, locale } = useI18n();
const localepath = useLocalePath();
const activeSubMenu = ref<boolean>(false);

const selectedItem = reactive<MegaMenuInterface>({
  label: "",
});

///////////////////
function triggerItemSelect(
  item: MegaMenuInterface,
  hover: string | null = null
) {
  if (item.items) {
    if (activeSubMenu.value && hover == null) activeSubMenu.value = false;
    else {
      selectedItem.label = item.label;
      selectedItem.items = item.items;
      activeSubMenu.value = true;
    }
  } else activeSubMenu.value = false;
}
</script>

<template>
  <nav
    class="megamenu"
    @blur="activeSubMenu = false"
    @mouseleave="activeSubMenu = false"
  >
    <ul class="p-0 m-0 flex">
      <li v-for="(item, index) in items" :key="index">
        <slot :name="item.label">
          <PrimeButton
            class="megamenu--button"
            :as="item.path ? 'router-link' : 'button'"
            :to="localepath(item.path ?? '/')"
            @click="triggerItemSelect(item)"
            @mouseover="triggerItemSelect(item, 'hover')"
            @blur="activeSubMenu = false"
          >
            <h2 v-text="t(item.label)"></h2>
            <i v-if="item.items" class="pi pi-fw pi-angle-down"></i>
          </PrimeButton>
        </slot>
      </li>
    </ul>
    <Transition name="drop-drawer">
      <div v-if="activeSubMenu" class="megamenu--submenu">
        <ul class="columns-3">
          <li v-for="(item, key) in selectedItem.items" :key="key">
            <NuxtLink
              :to="item.path!"
              class="flex p-2 hover:bg-green-100/70 dark:hover:bg-primary-200/50"
            >
              <div>
                <svg width="3rem" height="3rem">
                  <use :href="item.icon" width="3rem" height="3rem"></use>
                </svg>
              </div>
              <div class="flex flex-col items-start px-2">
                <h3 class="font-semibold text-lg">{{ t(item.label) }}</h3>
                <p
                  v-text="item.content"
                  class="text-sm text-gray-700 dark:text-gray-300 hidden xl:block max-w-[10rem] h-[3.8rem] overflow-hidden text-ellipsis whitespace-break-spaces"
                ></p>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <PrimeDivider
          :pt="{
            root: 'my-4',
          }"
        />
        <PrimeMenubar
          :model="subItems[0].items"
          :pt="{
            rootList: '!mr-5 text-sm xl:justify-between w-[calc(100%-9rem)]',
            item: 'mx-2',
          }"
        >
          <template #start>
            <h3 class="font-semibold text-lg">
              {{
                `${t("general.for")} ${t("general.every")} ${t(
                  "general.team"
                )}.`
              }}
            </h3>
          </template>
          <template #item="{ item, props, hasSubmenu }">
            <nuxt-link
              v-if="item.path"
              :to="item.path"
              class="flex items-center hover:bg-white dark:bg-gray-800 hover:text-green-500 dark:hover:text-primary-400"
            >
              <span v-if="item.icon" :class="item.icon" />
              <span>{{ t(item.label as string) }}</span>
              <i
                class="pi mx-1 text-sm"
                :class="{
                  'pi-arrow-right': locale == 'en',
                  'pi-arrow-left': locale == 'fa',
                }"
              ></i>
            </nuxt-link>
          </template>
        </PrimeMenubar>
      </div>
    </Transition>
  </nav>
</template>
<style lang="postcss" scoped>
.megamenu {
  @apply p-4 relative;
  &--button {
    @apply !border-none !bg-transparent hover:!bg-transparent flex justify-center items-center gap-0
        !text-gray-900 dark:!text-white hover:!text-green-500 dark:hover:!text-primary-500 !p-0 mx-4 !text-lg !font-bold;
  }
  &--submenu {
    @apply absolute w-full top-14 bg-white dark:bg-gray-800 right-0 left-0 rounded-md p-3;
    .p-menubar {
      a:hover {
        i.pi-arrow-right {
          @apply translate-x-1 transition-transform;
        }
      }
      a:hover {
        i.pi-arrow-left {
          @apply -translate-x-1 transition-transform;
        }
      }
    }
  }
}
</style>
