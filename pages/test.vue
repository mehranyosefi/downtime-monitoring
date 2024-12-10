<script setup lang="ts">
import "primeicons/primeicons.css";
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout>
    <!-- <FooterSection /> -->
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
