<script setup lang="ts">
import { $dt } from "@primevue/themes";

const appStore = useAppStore();
const loadingColor = computed(() => {
  if (appStore.isDarkTheme) return $dt("primary.500").value.none["value"];
  return $dt("green.500").value.none["value"];
});
</script>
<template>
  <div>
    <NuxtLoadingIndicator
      :color="loadingColor"
      class="!opacity-100"
      :height="2.5"
    />
    <NuxtPage />
  </div>
</template>
