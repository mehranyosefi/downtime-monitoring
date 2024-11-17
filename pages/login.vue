<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();

definePageMeta({
  layout: false,
});
useHead({
  title: t("general.login"),
  meta: [
    { name: "description", content: t("phrases.seo.login.description") },
    { name: "keywords", content: t("phrases.seo.login.keywords") },
  ],
});
//data

const initialValues = reactive<{
  email: string;
  password: string;
}>({
  email: "",
  password: "",
});

//method
const resolver = ({ values }: Record<string, any>) => {
  const errors: any = { email: [], fullName: [], password: [] };
  if (!values.email) {
    errors.email.push({
      type: "required",
      message: t("errors.email.required"),
    });
  }

  if (!values.password) {
    errors.password.push({
      type: "required",
      message: t("errors.password.required"),
    });
  }
  if (values.password?.length < 6) {
    errors.password.push({
      type: "required",
      message: t("errors.password.min", { number: 6 }),
    });
  }
  return {
    errors,
  };
};

const onFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    // toast.add({
    //   severity: "success",
    //   summary: "Form is submitted.",
    //   life: 3000,
    // });
    console.log("IsValid");
  } else console.log("InValid");
};
</script>

<template>
  <div>
    <NuxtLayout name="sign">
      <PrimeForm
        v-slot="$form"
        :initialValues
        :resolver
        @submit="onFormSubmit"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <label for="email" v-text="t('general.email')"></label>
          <PrimeInputText
            name="email"
            type="email"
            :placeholder="t('phrases.placeholder.email')"
            fluid
          />
          <PrimeMessage
            v-if="$form.email?.invalid"
            class="mr-1"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.email.error?.message }}</PrimeMessage
          >
          <label
            for="password"
            v-text="t('general.password')"
            class="mt-5"
          ></label>
          <PrimeInputText
            name="password"
            type="password"
            :placeholder="t('phrases.placeholder.password')"
            fluid
          />
          <PrimeMessage
            v-if="$form.password?.invalid"
            class="mr-1"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.password.error?.message }}</PrimeMessage
          >
        </div>
        <PrimeButton
          class="!bg-green-500 mt-6"
          type="submit"
          severity="secondary"
          :label="t('general.login')"
          :pt="{
            root: '!border-green-400 shadow hover:!bg-green-600',
            label: 'text-white',
          }"
        />
      </PrimeForm>
      <template #footer>
        <footer>
          <div class="text-center mt-7 text-black dark:text-white font-medium">
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
.p-form {
  .p-inputtext {
    @apply !bg-gray-100 dark:!bg-gray-900 !border-gray-400 dark:!border-gray-600 !shadow mt-2 !text-black dark:!text-white;
  }
}
</style>
