<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      const localePath = useLocalePath();
      return navigateTo(localePath("dashboard-monitors"));
    },
  ],
});
</script>
<template></template>
