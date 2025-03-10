<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    active?: boolean;
  }>(),
  {
    active: false,
  }
);
const emit = defineEmits(["trigger-active"]);
const { t, locale } = useI18n();
const fetching = shallowRef<boolean>(true);
function handleShowChat() {
  fetching.value = true;
  emit("trigger-active", !props.active);
  setTimeout(() => {
    fetching.value = false;
  }, 1600);
}
</script>

<template>
  <div v-click-outside="() => $emit('trigger-active', false)">
    <slot name="prepend"></slot>
    <slot name="activator">
      <button
        :dir="locale === 'en' ? 'ltr' : 'rtl'"
        class="fixed bottom-5 z-10 bg-white dark:bg-gray-800 w-14 h-14 flex items-center justify-center shadow-xl ltr:rounded-l-full ltr:rounded-br-full ltr:right-6 rtl:rounded-r-full rtl:rounded-bl-full rtl:left-6 cursor-pointer"
        @click="handleShowChat"
        aria-label="conversation"
      >
        <svg
          width="2rem"
          height="2rem"
          class="text-green-500 dark:text-primary-500"
        >
          <use
            width="2rem"
            height="2rem"
            :href="`/img/icons.svg#chatbox-outline-${
              locale === 'en' ? 'left' : 'right'
            }`"
          ></use>
        </svg>
      </button>
    </slot>
    <Transition name="drop-drawer">
      <div
        v-if="active"
        class="conversation-modal"
        :dir="locale === 'en' ? 'ltr' : 'rtl'"
      >
        <div
          v-if="!fetching"
          class="conversation pt-5 h-full transition-colors"
        >
          <div class="w-[90%] mx-auto h-[32%]">
            <div class="flex items-center justify-between">
              <div class="circle-shadow"></div>
              <PrimeButton
                class="inline-block"
                :pt="{
                  root: 'bg-transparent! !hover:bg-transparent border-none! rounded-none! p-0!',
                }"
                @click="$emit('trigger-active', false)"
                name="close"
              >
                <svg
                  width="2rem"
                  height="2rem"
                  class="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"
                >
                  <use
                    width="2rem"
                    height="2rem"
                    href="/img/icons.svg#close"
                  ></use>
                </svg>
              </PrimeButton>
            </div>
            <div class="mt-4">
              <h2 class="text-2xl font-bold capitalize">
                <span v-if="locale === 'en'">
                  {{
                    `${t("general.UptimeRobot")} ${t("general.team")} ${t(
                      "general.support"
                    )}`
                  }}
                </span>
                <span v-else>
                  {{
                    `${t("general.team")} ${t("general.support")} ${t(
                      "general.UptimeRobot"
                    )}`
                  }}
                </span>
              </h2>
              <p class="font-bold my-1" v-text="t('phrases.etc.helpYou')"></p>
            </div>
            <div class="mt-2 flex">
              <PrimeAvatar
                image="/img/conversation-avatar-1.jpg"
                :pt="{
                  root: 'w-10! h-10!',
                  image: 'rounded-full',
                }"
              />
              <PrimeAvatar
                image="/img/conversation-avatar-2.jpg"
                :pt="{
                  root: 'w-10! h-10!',
                  image: 'rounded-full',
                }"
              />
              <PrimeAvatar
                image="/img/conversation-avatar-3.jpg"
                :pt="{
                  root: 'w-10! h-10!',
                  image: 'rounded-full',
                }"
              />
              <PrimeAvatar
                image="/img/conversation-avatar-4.webp"
                :pt="{
                  root: 'w-10! h-10!',
                  image: 'rounded-full',
                }"
              />
            </div>
          </div>
          <div
            class="bg-gray-800 dark:bg-white rounded-xl h-[68.5%] transition-colors text-white dark:text-gray-900 relative"
          >
            <PrimeButton
              :pt="{
                root: 'flex w-full rounded-b-none rounded-t-xl p-4 hover:bg-gray-700 dark:hover:bg-gray-100',
              }"
              unstyled
              name="conversation"
            >
              <div
                class="circle-shadow bg-green-200 dark:bg-primary-400/90"
              ></div>
              <div
                class="flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"
              >
                <div class="flex justify-between w-full">
                  <h3 class="text-lg">Mr.Always Up</h3>
                  <span class="date text-xs"> 10/14/2024 13:50 </span>
                </div>
                <p class="text-sm text-gray-200 dark:text-gray-700">
                  <span v-if="locale === 'en'">Hey!.join our Discord...</span>
                  <span v-else>سلام! به گفت و گوی ما بپیوندید...</span>
                </p>
              </div>
            </PrimeButton>
            <PrimeButton
              severity="success"
              class="absolute! bottom-5 mx-auto! left-0 right-0 w-[80%]! rounded-md!"
              name="send-message"
            >
              <svg width="1.2rem" height="1.2rem">
                <use
                  width="1.2rem"
                  height="1.2rem"
                  href="/img/icons.svg#send-message"
                ></use>
              </svg>
              <span v-if="locale === 'en'" class="text-lg">
                {{
                  `${t("general.start")} ${t("general.new")} ${t(
                    "general.conversation"
                  )}`
                }}
              </span>
              <span v-else class="text-lg">
                {{
                  `${t("general.start")} ${t("general.conversation")} ${t(
                    "general.new"
                  )}`
                }}
              </span>
            </PrimeButton>
          </div>
        </div>
        <div v-else class="fallback pt-5 h-full">
          <div class="w-[90%] mx-auto h-[32%]">
            <div class="flex items-center justify-between mt-2">
              <PrimeSkeleton shape="circle" size="2rem"></PrimeSkeleton>
              <PrimeSkeleton shape="circle" size="2rem"></PrimeSkeleton>
            </div>

            <div class="mt-5">
              <PrimeSkeleton width="15rem"></PrimeSkeleton>
              <PrimeSkeleton width="9rem" class="my-3"></PrimeSkeleton>
            </div>
            <div class="mt-2 flex">
              <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
              <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
              <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
              <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
            </div>
          </div>
          <div class="h-[68.5%] relative">
            <div class="flex w-full p-3">
              <PrimeSkeleton shape="circle" size="2.5rem"></PrimeSkeleton>
              <div
                class="flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"
              >
                <div class="flex justify-between w-full">
                  <PrimeSkeleton width="5rem"></PrimeSkeleton>
                  <PrimeSkeleton width="5rem"></PrimeSkeleton>
                </div>
                <PrimeSkeleton width="6rem" class="mt-3"></PrimeSkeleton>
              </div>
            </div>
            <div class="absolute bottom-7 mx-auto left-0 right-0 w-[80%]">
              <PrimeSkeleton width="100%" height="2.9rem"></PrimeSkeleton>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <slot name="append"></slot>
  </div>
</template>
