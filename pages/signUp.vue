<script setup lang="ts">
definePageMeta({
  layout: "sign",
});
//data
const { locale, setLocale } = useI18n();
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
          :placeholder="$t('general.phrases.placeholder.email')"
        />
        <base-input
          v-model="user.fullName"
          :label="$t('user.fullName')"
          :placeholder="$t('general.phrases.placeholder.fullName')"
        />
        <base-input
          v-model="user.password"
          :label="$t('general.password')"
          :placeholder="$t('general.phrases.placeholder.password')"
        />
        <base-button class="mt-10">
          {{ $t("general.register") }}
        </base-button>
      </fieldset>
    </form>
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
