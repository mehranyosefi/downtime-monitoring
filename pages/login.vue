<script setup lang="ts">
definePageMeta({
  layout: false,
});
//data
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const user = reactive<{
  email: string;
  fullName: string;
  password: string;
}>({
  email: "",
  fullName: "",
  password: "",
});

//method
function formSubmit() {}
</script>
<template>
  <div>
    <NuxtLayout name="sign">
      <form @submit.prevent="formSubmit()">
        <fieldset>
          <legend class="block mx-auto">
            <h2
              v-text="$t('general.welcome')"
              class="text-center text-3xl font-semibold text-green-500"
            ></h2>
          </legend>
          <base-input
            v-model="user.email"
            type="email"
            :label="$t('general.email')"
            :placeholder="$t('phrases.placeholder.email')"
          />
          <base-input
            v-model="user.password"
            :label="$t('general.password')"
            :placeholder="$t('phrases.placeholder.password')"
          />
          <base-button class="mt-10">
            {{ $t("general.login") }}
          </base-button>
        </fieldset>
      </form>
      <template #footer>
        <footer>
          <div class="text-center mt-7 text-white dark:text-balck font-medium">
            <span v-text="$t('signIn.footer.line1')"></span
            >{{ locale == "fa" ? "؟" : "?" }}
            <nuxt-link
              :to="localePath('/signUp')"
              class="block w-fit mx-auto mt-1 underline decoration-green-500 text-lg text-green-500"
            >
              {{ $t("signIn.footer.line2") }}
            </nuxt-link>
          </div>
        </footer>
      </template>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
form {
  fieldset {
    .base-input {
      @apply my-7;
      &:deep(.scaffold) {
        .input {
          @apply w-full;
        }
        /* background-color: red; */
      }
    }
  }
}
</style>
