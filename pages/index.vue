<script lang="ts" setup>
const { locale, t } = useI18n();
definePageMeta({
  layout: false,
});
useHead({
  title: t("phrases.seo.index.title"),
  meta: [
    { name: "description", content: t("phrases.seo.signUp.description") },
    { name: "keywords", content: t("phrases.seo.signUp.keywords") },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout name="default">s </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
div {
  @apply text-indigo-400;
}
</style>
