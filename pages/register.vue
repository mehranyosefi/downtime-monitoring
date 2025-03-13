<script setup lang="ts">
const localePath = useLocalePath();
const { locale, t } = useI18n();
import { useToast } from "primevue/usetoast";
import type { ShallowRef } from "vue";

definePageMeta({
  middleware: "authorized",
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
const requestLoading: ShallowRef<boolean> = shallowRef<boolean>(false);
const toast = useToast();
const useUser = useUserStore();
const router = useRouter();
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

const onFormSubmit = async (e: {
  valid: boolean;
  states: { fullName: Ref<string>; email: Ref<string>; password: Ref<string> };
}): Promise<void> => {
  if (e.valid) {
    requestLoading.value = true;
    await useUser
      .register({
        fullName: e.states.fullName.value,
        email: e.states.email.value,
        password: e.states.password.value,
      })
      .finally(() => (requestLoading.value = false));
  }
};
</script>

<template>
  <div>
    <NuxtLayout name="sign">
      <PrimeCard class="mt-5">
        <template #title class="text-center">
          <h2
            v-if="locale == 'fa'"
            class="text-center font-semibold"
            v-html="
              `${$t('general.yourAccount')} را
              <span class='text-green-500 dark:text-primary-500'>${$t(
                'general.register'
              )}</span> کنید`
            "
          ></h2>
          <h2
            v-else
            class="text-center font-semibold"
            v-html="
              `<span class='text-green-500 dark:text-primary-500'>${$t(
                'general.register'
              )}</span> ${$t('general.yourAccount')}`
            "
          ></h2>
        </template>
        <template #content>
          <PrimeForm
            v-slot="$form"
            :initialValues
            :resolver
            @submit="onFormSubmit"
            class="flex flex-col mt-2"
          >
            <div class="flex flex-col gap-1">
              <label for="email" v-text="t('general.email')"></label>
              <PrimeInputText
                name="email"
                type="email"
                :placeholder="t('phrases.placeholder.email')"
                fluid
                autocomplete="on"
                :pt="{
                  root: 'mt-1',
                }"
              />
              <PrimeMessage
                v-if="$form.email?.invalid"
                class="mr-1"
                severity="error"
                size="small"
                variant="simple"
                :pt="{
                  text: 'text-xs!',
                }"
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
                autocomplete="on"
                :pt="{
                  root: 'mt-1',
                }"
              />
              <PrimeMessage
                v-if="$form.fullName?.invalid"
                class="mr-1"
                severity="error"
                size="small"
                variant="simple"
                :pt="{
                  text: 'text-xs!',
                }"
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
                autocomplete="on"
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
            </div>
            <PrimeButton
              class="mt-6"
              severity="success"
              type="submit"
              :label="t('general.register')"
              :loading="requestLoading"
              name="register"
            />
          </PrimeForm>
        </template>
      </PrimeCard>
      <template #footer>
        <footer>
          <div>
            <nuxt-link
              :to="localePath('login')"
              class="block w-fit mx-auto mt-5 underline text-sm"
            >
              {{ t("signup.footer") }}{{ locale == "fa" ? "؟" : "?" }}
            </nuxt-link>
          </div>
        </footer>
      </template>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped></style>
