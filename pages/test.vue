<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { locale, t } = useI18n();
</script>

<template>
  <div>
    {{ t("welcome") }}
  </div>
</template>
<style lang="postcss" scoped></style>
