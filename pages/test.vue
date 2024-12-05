<script setup lang="ts">
import "primeicons/primeicons.css";
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout>
    <div class="container" id="container">
      <div class="w-20 h-20 animate" id="icon">
        <svg width="24" height="24" class="sun">
          <use
            href="/img/icons.svg#website-monitoring"
            fill="red"
            class="fill-emerald-500"
          ></use>
        </svg>
      </div>

      <i class="pi pi-arrow-right"></i>
    </div>
  </NuxtLayout>
</template>
<style lang="postcss" scoped>
.container {
  @apply h-[500vh] overflow-auto;
}
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
