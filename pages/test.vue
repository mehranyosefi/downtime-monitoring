<template>
  <div>
    <svg width="24" height="24" class="sun">
      <!-- <use href="/img/icons.svg#material-symbols-clear-day-rounded"></use> -->
      <use
        href="/img/icons.svg#website-monitoring"
        fill="red"
        class="fill-emerald-500"
      ></use>
    </svg>

    <i class="pi pi-arrow-right"></i>
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
