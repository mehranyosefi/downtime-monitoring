export default defineI18nLocale(async (locale) => {
  await $fetch(`http://127.0.0.1:8000/api/${locale}`);
  return {
    welcome: "Bienvenue",
  };
  // return $fetch(`/api/${locale}`)
});

// or
//   export default {
//     welcome: 'Bienvenue'
//   }
