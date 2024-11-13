<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // model?: any;
    type?: "button" | "submit" | "reset";
    icon?: boolean;
  }>(),
  {
    type: "button",
    icon: false,
  }
);
</script>
<template>
  <button class="base-btn" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<style lang="postcss" scoped>
.base-btn {
  @apply bg-green-500 font-semibold block mx-auto w-full rounded-3xl py-2 hover:bg-green-600 transition-colors shadow-md;
  &:disabled {
    @apply bg-gray-600 text-gray-300 opacity-20;
  }
}
</style>
