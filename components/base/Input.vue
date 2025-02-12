<script setup lang="ts">
import type { ShallowRef } from "vue";

const model = defineModel();
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10000000000000,
  },
  minlength: {
    type: Number,
    default: 0,
  },
  maxlength: {
    type: Number,
    default: 100,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: [String, Number],
    default: 500,
  },
  tabIndex: {
    type: [String, Number],
    default: 1,
  },
});

const active: ShallowRef<boolean> = shallowRef<boolean>(false);
</script>

<template>
  <div
    :class="[
      'base-input text-base font-semibold mb-2',
      active ? 'active' : null,
      label != '' ? 'has-label' : null,
    ]"
    tabindex="-1"
  >
    <label class="label">
      {{ label }}
    </label>
    <div class="scaffold mt-2">
      <slot name="prepend" :active="active"> </slot>
      <input
        :type="type"
        @focus="active = true"
        @blur="active = false"
        @keyup.enter="$emit('keyup')"
        v-model="model"
        v-bind="{ min, max, minlength, maxlength, ...$attrs }"
        :readonly="readonly"
        :tabindex="tabIndex"
        class="input bg-gray-900 border border-gray-700 dark:bg-gray-100 dark:border-gray-400 rounded-md py-1 px-2 outline-none shadow-xl hover:border-gray-300 transition-all dark:hover:border-gray-600 placeholder:text-sm"
        :class="{ 'border-gray-500 dark:border-gray-500 outline-none': active }"
      />
      <slot name="append" :active="active"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
