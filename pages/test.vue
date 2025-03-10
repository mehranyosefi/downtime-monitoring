<script setup lang="ts">
import { useToast } from "primevue/usetoast";
definePageMeta({
  layout: false,
});
const { locale, t } = useI18n();
const toast = useToast();
onMounted(() => {
  toast.add({
    severity: "info",
    summary: "datamessage",
    detail: "Message Content",
    life: 3000,
  });
});
</script>

<template>
  <div>
    <span class="text-red-300">f</span>
    <PrimeToast />
  </div>
</template>
<style lang="postcss" scoped></style>
