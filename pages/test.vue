<template>
  <div class="text-black">
    <svg width="24" height="24" class="sun">
      <use href="/public/icons.svg#material-symbols-clear-day-rounded"></use>
    </svg>
    <section id="toggle-theme">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div
          class="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
        <span
          class="ms-3 before:content- text-sm font-medium text-gray-900 dark:text-gray-300"
          >Checked toggle</span
        >
      </label>
    </section>
  </div>
</template>
<script setup lang="ts"></script>

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
