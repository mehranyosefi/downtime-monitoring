<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { locale, t } = useI18n();
</script>

<template>
  <div>
    {{ locale }}
    {{ t("welcome") }}
  </div>
</template>
<style lang="postcss" scoped></style>
