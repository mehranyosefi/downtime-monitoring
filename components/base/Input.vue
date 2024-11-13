<script setup lang="ts">
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

const active = ref<boolean>(false);
</script>

<template>
  <div
    :class="[
      'base-input',
      active ? 'active' : null,
      label != '' ? 'has-label' : null,
    ]"
    tabindex="-1"
  >
    <label class="label">
      {{ label }}
    </label>
    <div class="scaffold">
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
        class="input"
      />
      <slot name="append" :active="active"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.base-input {
  .label {
    @apply text-base font-semibold mb-2;
  }
  .scaffold {
    @apply mt-2;

    input {
      @apply bg-gray-900 border border-gray-700 dark:bg-gray-100 dark:border-gray-400 rounded-md py-1 px-2 outline-none shadow-xl
      hover:border-gray-300 transition-all dark:hover:border-gray-600;

      &::placeholder {
        @apply text-sm;
      }
    }
  }
  &.active {
    .scaffold .input {
      @apply border-gray-500 dark:border-gray-500 outline-none;
    }
  }
}
</style>
