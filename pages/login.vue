<script setup lang="ts">
import type { ShallowRef } from "vue";

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
const requestLoading: ShallowRef<boolean> = shallowRef<boolean>(false);
const toast = useToast();
const router = useRouter();
const useUser = useUserStore();

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

const onFormSubmit = async (e: {
  valid: boolean;
  states: object;
}): Promise<void> => {
  if (e.valid) {
    try {
      requestLoading.value = true;
      const { status, data, error } = await useAPI("/login", {
        method: "POST",
        server: false,
        body: {
          email: e.states.email.value,
          password: e.states.password.value,
        },
      });
      if (status.value === "error") {
        toast.add({
          severity: "error",
          summary: error.value?.data.error,
          life: 3000,
        });
      } else if (status.value === "success") {
        localStorage.setItem("user", JSON.stringify(data.value.user));
        localStorage.setItem(
          "sessions",
          JSON.stringify({
            access_token: data.value.token,
            refresh_token: "",
          })
        );
        useUser.setUser(data.value.user as object);
        useUser.setSessions({
          access_token: data.value.token,
          refresh_token: "",
        });
        toast.add({
          severity: "success",
          summary: data.value.message,
          life: 3000,
        });
        router.push(localePath("/"));
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
  <div>
    <NuxtLayout name="sign">
      <PrimeCard class="mt-10">
        <template #title class="text-center">
          <h2
            v-text="$t('general.welcome')"
            class="text-center text-xl font-semibold text-green-500 dark:text-primary-500"
          ></h2>
        </template>
        <template #content>
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
                  text: '!text-xs',
                }"
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
                  text: '!text-xs',
                }"
                >{{ $form.password.error?.message }}</PrimeMessage
              >
            </div>
            <PrimeButton
              class="mt-6"
              type="submit"
              severity="success"
              :label="t('general.login')"
              :loading="requestLoading"
            />
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
  </div>
</template>

<style lang="postcss" scoped></style>
