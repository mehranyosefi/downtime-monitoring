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
              v-if="locale == 'fa'"
              class="text-center text-3xl font-semibold"
              v-html="
                `${$t('general.yourAccount')} را
            <span class='text-green-500'>${$t('general.register')}</span> کنید`
              "
            ></h2>
            <h2
              v-else
              class="text-center text-3xl font-semibold"
              v-html="
                `<span class='text-green-500'>${$t(
                  'general.register'
                )}</span> ${$t('general.yourAccount')}`
              "
            ></h2>
          </legend>
          <base-input
            v-model="user.email"
            type="email"
            :label="$t('general.email')"
            :placeholder="$t('phrases.placeholder.email')"
          />
          <base-input
            v-model="user.fullName"
            :label="$t('user.fullName')"
            :placeholder="$t('phrases.placeholder.fullName')"
          />
          <base-input
            v-model="user.password"
            :label="$t('general.password')"
            :placeholder="$t('phrases.placeholder.password')"
          />
          <base-button class="mt-10">
            {{ $t("general.register") }}
          </base-button>
        </fieldset>
      </form>
      <template #footer>
        <footer>
          <div>
            <nuxt-link
              :to="localePath('/login')"
              class="block w-fit mx-auto mt-7 underline decoration-green-500 text-lg text-green-500"
            >
              {{ $t("signup.footer") }}{{ locale == "fa" ? "؟" : "?" }}
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
