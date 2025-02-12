<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    mLeft?: number;
    mTop?: number;
    active: boolean;
    mWidth?: number;
  }>(),
  {
    mLeft: 0,
    mTop: 0,
    mWidth: 0,
  }
);
//data
const { locale } = useI18n();

const menu = useTemplateRef("menu");
const menuContent = useTemplateRef("menuContent");

//TODO reactive style
const style = computed(() => {
  const properties = menu.value!.getBoundingClientRect();
  const leftFit =
    locale.value == "fa" ? -properties?.width - 12 : +properties?.width + 3;
  menuContent.value?.getBoundingClientRect();
  return {
    width: `${properties?.width + props.mWidth}px`,
    left: `${properties?.left + leftFit + props.mLeft}px`,
    top: `${properties?.top + properties?.height + props.mTop}px`,
  };
});
</script>

<style lang="postcss" scoped></style>

<template>
  <div class="menu-global" ref="menu">
    <slot name="activator"></slot>
    <Teleport to="#teleports">
      <transition name="fade">
        <div
          ref="menuContent"
          :style="style"
          v-if="active"
          class="menu absolute bg-gray-800 dark:bg-gray-200 outline-none shadow-lg overflow-y-auto p-0 m-0 rounded-md text-white dark:text-balck z-[1000] max-w-[465px] max-h-[calc(50vh-76px)]"
          :class="[locale == 'fa' ? 'rtl' : null, locale]"
        >
          <slot name="prepend-item"></slot>
          <slot name="items"></slot>
          <slot name="append-item"></slot>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
