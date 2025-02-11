export default defineI18nLocale(async (locale) => {
  const { data }: { data: object } = await $fetch(
    `http://127.0.0.1:8000/api/locales/${locale}`
  );
  return data;
});

// or
//   export default {
//     welcome: 'Bienvenue'
//   }
