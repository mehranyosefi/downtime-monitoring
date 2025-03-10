<script lang="ts" setup>
import type { ShallowRef } from "vue";

const route = useRoute();
const { locale, t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t("general.reset_password"),
  meta: [
    {
      name: "description",
      content: t("phrases.seo.reset_password.description"),
    },
    { name: "keywords", content: t("phrases.seo.reset_password.keywords") },
  ],
});
const initialValues = reactive<{
  password: string;
  password_confirmation: string;
  email: string;
  token: string;
}>({
  password: "",
  password_confirmation: "",
  email: route.query.email as string,
  token: route.query.token as string,
});
const requestLoading: ShallowRef<boolean> = shallowRef<boolean>(false);
const toast = useToast();
const router = useRouter();

const resolver = ({ values }: Record<string, any>) => {
  const errors: any = {
    email: [],
    fullName: [],
    password: [],
    password_confirmation: [],
  };
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
  if (values.password?.length < 8) {
    errors.password.push({
      type: "required",
      message: t("errors.password.min", { number: 8 }),
    });
  }
  if (!values.password_confirmation) {
    errors.password_confirmation.push({
      type: "required",
      message: t("errors.password_confirmation.required"),
    });
  }
  if (values.password_confirmation?.length < 8) {
    errors.password_confirmation.push({
      type: "required",
      message: t("errors.password_confirmation.min", { number: 8 }),
    });
  }
  return {
    errors,
  };
};

const onFormSubmit = async (e: {
  valid: boolean;
  states: object;
}): Promise<void> => {
  if (e.valid) {
    if (!(e.states.password.value === e.states.password_confirmation.value)) {
      toast.add({
        severity: "error",
        summary: t("phrases.etc.invalidRepeatPassword"),
        life: 3000,
      });
      return;
    }
    console.log(e.states);
    try {
      requestLoading.value = true;
      const { status, data, error } = await useAPI("/reset-password", {
        method: "POST",
        server: false,
        body: {
          email: e.states.email.value,
          password: e.states.password.value,
          password_confirmation: e.states.password_confirmation.value,
          token: e.states.token.value,
        },
      });
      if (status.value === "error") {
        toast.add({
          severity: "error",
          summary: error.value?.data.message,
          life: 3000,
        });
      } else if (status.value === "success") {
        toast.add({
          severity: "success",
          summary: data.value.message,
          life: 15000,
        });
        router.push(localePath("login"));
      }
    } catch (e) {
      // console.log(e);
    } finally {
      requestLoading.value = false;
    }
  }
};
</script>

<template>
  <NuxtLayout name="sign">
    <PrimeCard class="mt-5">
      <template #title class="text-center">
        <h2
          v-text="$t('general.reset_password')"
          class="text-center font-semibold text-green-500 dark:text-primary-500"
        ></h2>
      </template>
      <template #content>
        <PrimeForm
          v-slot="$form"
          :initialValues
          :resolver
          @submit="onFormSubmit"
          class="flex flex-col gap-4 mt-2"
        >
          <div class="flex flex-col gap-1">
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
              :pt="{
                root: 'mt-1',
              }"
            />
            <PrimeMessage
              v-if="$form.password?.invalid"
              class="mr-1"
              severity="error"
              size="small"
              variant="simple"
              :pt="{
                text: 'text-xs!',
              }"
              >{{ $form.password.error?.message }}</PrimeMessage
            >

            <label
              for="password_confirmation"
              v-text="`${t('general.repeat')} ${t('general.password')}`"
              class="mt-5"
            ></label>
            <PrimeInputText
              name="password_confirmation"
              type="password"
              :placeholder="t('phrases.placeholder.password')"
              fluid
              :pt="{
                root: 'mt-1',
              }"
            />
            <PrimeMessage
              v-if="$form.password_confirmation?.invalid"
              class="mr-1"
              severity="error"
              size="small"
              variant="simple"
              :pt="{
                text: 'text-xs!',
              }"
              >{{ $form.password_confirmation.error?.message }}</PrimeMessage
            >
            <PrimeInputText name="email" type="hidden" fluid />
            <PrimeInputText name="token" type="hidden" fluid />
          </div>
          <PrimeButton
            class="mt-6 capitalize"
            type="submit"
            severity="success"
            :label="t('general.verify')"
            :loading="requestLoading"
            name="verify"
          />
          <nuxt-link
            :to="localePath('login')"
            class="block w-fit mx-auto mt-2 underline text-sm"
          >
            {{
              `${$t("general.back")} ${$t("general.to")} ${$t("general.login")}`
            }}
          </nuxt-link>
        </PrimeForm>
      </template>
    </PrimeCard>

    <template #footer>
      <footer>
        <div class="text-center mt-7">
          <span class="text-sm text-gray-600 dark:text-gray-300">
            {{ `${$t("signIn.footer.line1")}${locale == "fa" ? "؟" : "?"}` }}
          </span>
          <nuxt-link
            :to="localePath('register')"
            class="block w-fit mx-auto mt-2 underline text-sm"
          >
            {{ $t("signIn.footer.line2") }}
          </nuxt-link>
        </div>
      </footer>
    </template>
  </NuxtLayout>
</template>
<style lang="postcss" scoped></style>
