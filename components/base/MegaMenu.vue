<script lang="ts" setup>
import type { Reactive, ShallowRef } from "vue";
import type { MegaMenuInterface } from "~/types";

const props = defineProps<{
  items: MegaMenuInterface[];
  subItems?: MegaMenuInterface[];
}>();

const { t, locale } = useI18n();
const localepath = useLocalePath();
const activeSubMenu: ShallowRef<boolean> = shallowRef<boolean>(false);

const selectedItem: Reactive<MegaMenuInterface> = reactive<MegaMenuInterface>({
  label: "",
});

///////////////////
function triggerItemSelect(
  item: MegaMenuInterface,
  hover: string | null = null
): void {
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
    class="megamenu p-4 relative"
    @blur="activeSubMenu = false"
    @mouseleave="activeSubMenu = false"
  >
    <ul class="p-0 m-0 flex">
      <li v-for="(item, index) in items" :key="index">
        <slot :name="item.label">
          <PrimeButton
            class="megamenu--button !border-none !bg-transparent hover:!bg-transparent flex justify-center items-center !gap-0 !p-0 mx-4 !text-lg !font-bold group"
            :as="item.path ? 'router-link' : 'button'"
            :to="localepath(item.path ?? item.label)"
            @click="triggerItemSelect(item)"
            @mouseover="triggerItemSelect(item, 'hover')"
            @blur="activeSubMenu = false"
          >
            <h2
              class="transition-colors duration-300 text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-primary-500"
              v-text="t(item.label)"
            ></h2>
            <svg
              v-if="item.items"
              class="size-6 transition-all duration-300 text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-primary-500 mb-1"
              :class="{ 'rotate-180': activeSubMenu }"
            >
              <use
                class="size-6"
                href="/img/icons.svg#arrow-down-rounded"
              ></use>
            </svg>
          </PrimeButton>
        </slot>
      </li>
    </ul>
    <Transition name="drop-drawer">
      <div
        v-if="activeSubMenu"
        class="megamenu--submenu absolute w-full top-14 bg-white dark:bg-gray-800 right-0 left-0 rounded-md p-3"
      >
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
              class="flex items-center hover:bg-white dark:bg-gray-800 hover:text-green-500 dark:hover:text-primary-400 group"
            >
              <span v-if="item.icon" :class="item.icon" />
              <span>{{ t(item.label as string) }}</span>
              <svg
                class="size-5 mx-1"
                :class="{
                  'group-hover:translate-x-1 transition-transform':
                    locale == 'en',
                  'rotate-180 group-hover:-translate-x-1 transition-transform':
                    locale == 'fa',
                }"
              >
                <use class="size-5" href="/img/icons.svg#arrow-right"></use>
              </svg>
            </nuxt-link>
          </template>
        </PrimeMenubar>
      </div>
    </Transition>
  </nav>
</template>
<style lang="postcss" scoped></style>
