<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();

definePageMeta({
  layout: false,
});
useHead({
  title: t("general.signUp"),
  meta: [
    { name: "description", content: t("phrases.seo.signUp.description") },
    { name: "keywords", content: t("phrases.seo.signUp.keywords") },
  ],
});
//data

const initialValues = reactive<{
  email: string;
  fullName: string;
  password: string;
}>({
  email: "",
  fullName: "",
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

  if (!values.fullName) {
    errors.fullName.push({
      type: "required",
      message: t("errors.fullName.required"),
    });
  }
  if (values.fullName?.length < 6) {
    errors.fullName.push({
      type: "required",
      message: t("errors.fullName.min", { number: 6 }),
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
            for="fullName"
            v-text="t('user.fullName')"
            class="mt-5"
          ></label>
          <PrimeInputText
            name="fullName"
            type="text"
            :placeholder="t('phrases.placeholder.fullName')"
            fluid
          />
          <PrimeMessage
            v-if="$form.fullName?.invalid"
            class="mr-1"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.fullName.error?.message }}</PrimeMessage
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
          :label="t('general.register')"
          :pt="{
            root: '!border-green-400 shadow hover:!bg-green-600',
            label: 'text-white',
          }"
        />
      </PrimeForm>
      <template #footer>
        <footer>
          <div>
            <nuxt-link
              :to="localePath('/login')"
              class="block w-fit mx-auto mt-7 underline decoration-green-500 text-base text-green-500"
            >
              {{ t("signup.footer") }}{{ locale == "fa" ? "؟" : "?" }}
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
    @apply mt-2;
  }
}
</style>
