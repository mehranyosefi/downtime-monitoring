<template>
  <div class="text-black">
    <svg width="24" height="24" class="sun">
      <use href="/img/icons.svg#material-symbols-clear-day-rounded"></use>
    </svg>
    <Slider v-model="value" class="w-56 p-slider" const value="ref(null);" />

    <div class="card mx-2">
      <div
        class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900"
      >
        <PrimeButton
          label="Check"
          icon="pi pi-check"
          pt:root="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
          pt:label="text-white font-bold text-xl"
          pt:icon="text-white text-xl"
        ></PrimeButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import "primeicons/primeicons.css";

const value = ref(null);
</script>

<style lang="postcss" scoped>
.sun {
  @apply fill-gray-800;
}

#toggle-theme {
  label {
    div {
      &::after {
        content: "";
      }
    }
  }
}
</style>
