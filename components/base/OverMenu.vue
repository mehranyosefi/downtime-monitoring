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

const menu = ref(null);
const menuContent = ref(null);

//TODO reactive style
const style = computed(() => {
  const properties = menu.value.getBoundingClientRect();
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

<style lang="postcss" scoped>
/* .menu-global {
    @apply block w-full;
} */
.menu {
  @apply absolute bg-gray-800 dark:bg-gray-200 outline-none shadow-lg overflow-y-auto p-0 m-0 rounded-md
  text-gray-100 dark:text-balck;
  max-width: 465px;
  max-height: calc(50vh - 76px);
  z-index: 1000;

  ul li {
    /* @apply hover:bg-primary/10; */
  }
}
</style>

<template>
  <div class="menu-global" ref="menu">
    <slot name="activator"></slot>
    <Teleport to="#teleports">
      <transition name="fade">
        <div
          ref="menuContent"
          :style="style"
          v-if="active"
          class="menu"
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
