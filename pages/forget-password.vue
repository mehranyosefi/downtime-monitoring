<script lang="ts" setup>
import type { ShallowRef } from "vue";

const route = useRoute();
const { locale, t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t("general.forget_password"),
  meta: [
    {
      name: "description",
      content: t("phrases.seo.forget_password.description"),
    },
    { name: "keywords", content: t("phrases.seo.forget_password.keywords") },
  ],
});

const initialValues = reactive<{
  email: string;
}>({
  email: "",
});
const requestLoading: ShallowRef<boolean> = shallowRef<boolean>(false);
const toast = useToast();
const router = useRouter();
const useUser = useUserStore();

const resolver = ({ values }: Record<string, any>) => {
  const errors: any = {
    email: [],
  };
  if (!values.email) {
    errors.email.push({
      type: "required",
      message: t("errors.email.required"),
    });
  }
  return {
    errors,
  };
};

const onFormSubmit = async (e: {
  valid: boolean;
  states: { email: Ref<string> };
}): Promise<void> => {
  if (e.valid) {
    requestLoading.value = true;
    await useUser
      .forgetPassword(e.states.email.value)
      .finally(() => (requestLoading.value = false));
  }
};
</script>

<template>
  <NuxtLayout name="sign">
    <PrimeCard class="mt-5">
      <template #title class="text-center">
        <h2
          v-text="$t('general.forget_password')"
          class="text-center font-semibold text-green-500 dark:text-primary-500 capitalize"
        ></h2>
        <p
          class="text-xs font-semibold text-center text-gray-600 dark:text-gray-300 mt-4"
          v-text="t('phrases.etc.resetPassword')"
        ></p>
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
            <label for="email" v-text="t('general.email')"></label>
            <PrimeInputText
              name="email"
              type="email"
              :placeholder="t('phrases.placeholder.email')"
              fluid
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
          </div>
          <PrimeButton
            class="mt-6 capitalize"
            type="submit"
            severity="success"
            :label="t('general.send')"
            :loading="requestLoading"
            name="send"
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
