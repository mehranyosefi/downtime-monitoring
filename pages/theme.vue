<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<template>
  <PrimeButton
    label="toggle theme"
    @click="toggleTheme()"
    class="m-5"
  ></PrimeButton>

  <div class="card flex justify-center flex-wrap gap-4">
    <PrimeButton label="Primary" severity="primary" rounded />
    <PrimeButton label="Secondary" severity="secondary" rounded />
    <PrimeButton label="Success" severity="success" rounded />
    <PrimeButton label="Info" severity="info" rounded />
    <PrimeButton label="Warn" severity="warn" rounded />
    <PrimeButton label="Help" severity="help" rounded />
    <PrimeButton label="Danger" severity="danger" rounded />
    <PrimeButton label="Contrast" severity="contrast" rounded />

    <div>mehran</div>
  </div>
</template>

<style lang="postcss" scoped></style>
