<script lang="ts" setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
import { headerMegaMenu } from "~/types/menu";
import { finiteScrolling } from "~/utility";
import { trustItems } from "~/types/menu";
import { faTrustItems } from "~/types/menu";

definePageMeta({
  pageTransition: {
    name: "page",
  },
});
useHead({
  title: t("phrases.seo.index.title"),
  meta: [
    { name: "description", content: t("phrases.seo.signUp.description") },
    { name: "keywords", content: t("phrases.seo.signUp.keywords") },
  ],
});
const useApp = useAppStore();
const { isOnTablet, isOnMobile } = useWindowProperty();
const templateSections = ref<{ [key: string]: boolean }>({
  cardItems: false,
  trust: false,
  statusPage: false,
  carousel: false,
});
const products = reactive([
  {
    img: "/img/godaddy-logo.svg",
  },
  {
    img: "/img/nasa.svg",
  },
  {
    img: "/img/moodys-logo.svg",
  },
  {
    img: "/img/ibm-logo.svg",
  },
  {
    img: "/img/expedia-logo.svg",
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: "1280px",
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: "1024px",
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "640px",
    numVisible: 2,
    numScroll: 1,
  },
]);
const layoutIsScrollable = ref<boolean>(false);

onMounted(() => {
  finiteScrolling(
    ".main",
    templateSections.value,
    (items: { [key: string]: boolean } | null, isEnd) => {
      if (items) templateSections.value = items;
      layoutIsScrollable.value = isEnd;
    }
  );
});

const animationNameCompute = (key: number) => {
  if (key === 0) {
    if (locale.value === "en") {
      return "slide-left";
    }
    return "slide-right";
  } else if (key === 1) {
    if (locale.value === "en") {
      if (isOnTablet.value) return "slide-right";
      return "slide-bottom";
    } else {
      if (isOnTablet.value) return "slide-left";
      return "slide-bottom";
    }
  } else {
    if (locale.value === "en") {
      if (isOnTablet.value) return "slide-left";
      return "slide-right";
    } else {
      if (isOnTablet.value) return "slide-right";
      return "slide-left";
    }
  }
};

// const { data: trustItems } = useFetch(`/api/${locale.value}/trust`, {
//   server: false,
// });
</script>

<template>
  <NuxtLayout name="default" :scrollable="layoutIsScrollable">
    <div class="transition-colors pb-32">
      <div class="container mx-auto px-10 pb-14">
        <div
          class="grid grid-row-2 lg:grid-cols-2 gap-y-20 gap-x-10 max-lg:py-24 min-h-[calc(100vh-89px)] content-center"
        >
          <div
            class="w-fit m-auto max-md:mt-20"
            v-animation-on-viewport="
              locale == 'en' ? 'slide-left' : 'slide-right'
            "
          >
            <h2 v-if="locale == 'en'" class="text-6xl font-semibold">
              {{ `${t("index.serviceTitle.one")}` }} <br />
              <span class="text-green-500 dark:text-primary-500">
                {{ `${t("general.uptime")} ${t("general.monitoring")}` }}
              </span>
              service.
            </h2>
            <h2 v-else class="text-6xl font-semibold leading-relaxed">
              {{ `${t("index.serviceTitle.one")}` }} <br />
              <span class="text-green-500 dark:text-primary-500">
                {{ `${t("index.serviceTitle.two")}` }}
              </span>
            </h2>
            <p class="my-8 text-xl font-semibold">
              {{ `${t("index.getTitle")}` }}
              <span class="text-green-500 dark:text-primary-500"
                >{{ `${t("general.totally")} ` }}
                <span v-text="t('general.free')" class="uppercase"></span></span
              >.
            </p>
            <PrimeButton
              severity="success"
              :pt="{
                root: '!px-20 !py-4 !mx-auto',
              }"
            >
              <NuxtLink
                :to="`${localePath('index')}#`"
                class="font-semibold"
                v-text="t('index.startMonitoring')"
              ></NuxtLink>
            </PrimeButton>
          </div>

          <div
            class="w-fit m-auto max-lg:mt-20"
            v-animation-on-viewport="
              locale == 'en' ? 'slide-right' : 'slide-left'
            "
          >
            <i
              class="w-[26rem] md:w-[30rem]"
              :class="{
                'content-darkIndex': useApp.isDarkTheme,
                'content-lightIndex': !useApp.isDarkTheme,
              }"
            ></i>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 transition-colors"
      >
        <div class="container mx-auto px-10 py-32">
          <div>
            <h4
              class="text-4xl font-semibold text-center"
              v-animation-on-viewport="'slide-right'"
            >
              {{ t("index.careAbout") }} <br />
              <span v-if="locale == 'fa'" class="leading-normal">
                {{ t("phrases.etc.inOnePlace") }}
                <span
                  class="text-green-500 dark:text-primary-500"
                  v-text="t('general.monitored')"
                ></span
                >.
              </span>
              <span v-else>
                <span
                  class="text-green-500 dark:text-primary-500"
                  v-text="t('general.monitored')"
                ></span>
                {{ t("phrases.etc.inOnePlace") }}.
              </span>
            </h4>
          </div>
          <div
            v-if="templateSections.cardItems"
            class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 pt-16"
          >
            <PrimeCard
              v-for="(i, key) in headerMegaMenu[0].items"
              :key="key"
              class="shadow-md p-2"
              :pt="{
                root: 'scale-0',
              }"
              v-animation-on-scroll
            >
              <template #title>
                <svg
                  width="5rem"
                  height="5rem"
                  class="text-green-500 dark:text-primary-500"
                >
                  <use :href="i.icon" width="5rem" height="5rem"></use>
                </svg>
                <h5 v-text="t(i.label)" class="font-bold text-2xl mt-2"></h5>
              </template>
              <template #content>
                <p
                  v-text="locale === 'en' ? i.content : i.faContent"
                  class="text-lg text-multiline-ellips-3"
                ></p>
                <PrimeButton
                  severity="success"
                  class="mt-5"
                  :label="t(i.label)"
                >
                </PrimeButton>
              </template>
            </PrimeCard>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-10 py-32" v-if="templateSections.trust">
        <div>
          <h4
            class="text-4xl font-semibold text-center"
            v-animation-on-viewport
          >
            <span v-if="locale === 'en'">
              {{ `${t("general.why")} ${t("general.users")}` }}
              <span
                class="text-green-500 dark:text-primary-500"
                v-text="t('general.trusts')"
              ></span>
              {{ t("general.UptimeRobot") }}
            </span>
            <span v-else>
              {{
                `${t("general.why")} ${t("general.users")} به ${t(
                  "general.UptimeRobot"
                )}`
              }}
              <span class="text-green-500" v-text="t('general.trusts')"></span>
            </span>
          </h4>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          <Primecard
            v-for="(trust, key) in locale === 'en' ? trustItems : faTrustItems"
            :key="key"
            class="shadow-md p-2"
            v-animation-on-scroll="animationNameCompute(key)"
          >
            <template #title>
              <div class="text-gray-400" v-text="trust.userName"></div>
              <div class="flex flex-nowrap mb-6">
                <svg
                  class="text-orange-600"
                  width="2rem"
                  height="2rem"
                  v-for="i in 5"
                  :key="i"
                  :viewBox="locale == 'en' ? '4 0 24 24' : '-4 0 24 24'"
                >
                  <use href="/img/icons.svg#star"></use>
                </svg>
              </div>
              <h5 class="font-extrabold text-2xl" v-text="trust.title"></h5>
            </template>
            <template #content>
              <p
                class="text-lg text-multiline-ellips-4"
                v-text="trust.content"
              ></p>
              <div class="text-gray-400 mt-2 text-lg">
                <span>{{
                  locale === "en" ? "Peviewed on " : "مشاهده شده در "
                }}</span>
                <nuxt-link
                  target="_blank"
                  class="text-green-500 dark:text-primary-400 font-bold"
                  :to="`https://${trust.link}`"
                  >{{ trust.link }}
                </nuxt-link>
              </div>
            </template>
          </Primecard>
        </div>
      </div>
      <div
        v-if="templateSections.statusPage"
        class="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 min-h-screen content-center pb-48"
      >
        <div class="container mx-auto px-10">
          <div class="grid grid-cols-l lg:grid-cols-2 gap-x-8 gap-y-16">
            <div class="order-2 lg:order-1 mt-40 px-10 lg:mt-auto">
              <h4 class="text-5xl font-semibold">
                Inform your customers about incidents with
                <br />
                <span class="text-green-500 dark:text-primary-500"
                  >status pages</span
                >.
              </h4>
              <p
                class="my-4 text-lg"
                :class="{ 'pr-10': locale === 'en', 'pl-10': locale !== 'en' }"
              >
                Be transparent. Inform customers of planned outages. <br />
                Show them that you strive to keep your service 100% online.
              </p>
              <div class="flex items-center">
                <div class="text-green-500 dark:text-primary-500 flex">
                  <nuxt-link to="/">Check LIVE demo</nuxt-link>
                  <svg class="mx-1" width="1rem" height="1rem">
                    <use
                      width="1rem"
                      height="1rem"
                      href="/img/icons.svg#external-link"
                    ></use>
                  </svg>
                </div>
                <span class="px-1" v-text="t('general.or')"></span>
                <nuxt-link to="/" class="text-green-500 dark:text-primary-500">
                  Status Pages</nuxt-link
                >
              </div>
            </div>
            <div class="relative order-1 lg:order-2 lg:-top-24 xl:-top-0 flex">
              <div
                class="absolute max-xl:top-5 rounded-full bg-green-500 dark:bg-blue-500 h-[70vw] w-[70vw] lg:h-[31rem] lg:w-[31rem] xl:h-[35rem] xl:w-[35rem] max-lg:-right-[45vw]"
              ></div>
              <div
                class="relative bg-white dark:bg-gray-800 w-full top-[14vw] lg:w-[36rem] lg:h-[19rem] xl:w-[40rem] xl:h-[23rem] z-10 lg:right-[7rem] xl:right-[7rem] lg:top-[7rem] xl:top-[5.5rem]"
              >
                <i
                  class="w-full h-full p-3 content-serviceStatus"
                  :class="{
                    'content-serviceStatusDark': useApp.isDarkTheme,
                    'content-serviceStatus': !useApp.isDarkTheme,
                  }"
                ></i>
              </div>
            </div>
            <!-- <div>3</div>
            <div>4</div> -->
          </div>
        </div>
      </div>
      <div v-if="templateSections.carousel" class="dark:bg-gray-100 py-32">
        <div class="container mx-auto px-10 pb-14">
          <PrimeCarousel
            :value="products"
            :page="0"
            :numVisible="5"
            :numScroll="1"
            :responsiveOptions="responsiveOptions"
            :autoplayInterval="3000"
            :showNavigators="false"
            :showIndicators="false"
            :circular="isOnMobile"
            :pt="{
              item: 'flex items-center justify-center',
            }"
            :dir="locale === 'en' ? 'ltr' : 'rtl'"
          >
            <template #item="slotProps">
              <div>
                <img
                  width="120px"
                  height="120px"
                  :src="slotProps.data.img"
                  alt=""
                />
              </div>
            </template>
          </PrimeCarousel>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped></style>
