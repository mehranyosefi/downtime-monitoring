<script setup lang="ts">
// await new Promise((resolve, reject) => {
//   setTimeout(resolve, 1500);
// });
</script>

<template>
  <div class="conversation">
    <div class="w-[90%] mx-auto h-[32%]">
      <div class="flex items-center justify-between">
        <div class="circle-shadow"></div>
        <PrimeButton
          class="inline-block"
          :pt="{
            root: '!bg-transparent !hover:bg-transparent !border-none !rounded-none !p-0',
          }"
          @click="$emit('handle-close')"
        >
          <svg
            width="2rem"
            height="2rem"
            class="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-primary-500 cursor-pointer transition-all"
          >
            <use width="2rem" height="2rem" href="/img/icons.svg#close"></use>
          </svg>
        </PrimeButton>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl font-bold">UptimeRobot Team Support</h2>
        <p class="font-bold">How can we help you?</p>
      </div>
      <div class="mt-1 flex">
        <PrimeAvatar
          image="/img/conversation-avatar-1.jpg"
          :pt="{
            root: '!w-10 !h-10',
            image: 'rounded-full',
          }"
        />
        <PrimeAvatar
          image="/img/conversation-avatar-2.jpg"
          :pt="{
            root: '!w-10 !h-10',
            image: 'rounded-full',
          }"
        />
        <PrimeAvatar
          image="/img/conversation-avatar-3.jpg"
          :pt="{
            root: '!w-10 !h-10',
            image: 'rounded-full',
          }"
        />
        <PrimeAvatar
          image="/img/conversation-avatar-4.webp"
          :pt="{
            root: '!w-10 !h-10',
            image: 'rounded-full',
          }"
        />
      </div>
    </div>
    <div
      class="bg-gray-800 dark:bg-white rounded-xl h-[68%] transition-colors text-white dark:text-gray-900 relative"
    >
      <PrimeButton
        :pt="{
          root: 'flex w-full rounded-b-none rounded-t-xl p-4 hover:bg-gray-700 dark:hover:bg-gray-100',
        }"
        unstyled
      >
        <div class="circle-shadow dark:bg-primary-400/90"></div>
        <div
          class="flex flex-col items-start w-[calc(100%-36px)] ltr:pl-3 rtl:pr-3"
        >
          <div class="flex justify-between w-full">
            <h3 class="text-lg">Mr.Always Up</h3>
            <span class="date text-xs"> 10/14/2024 13:50 </span>
          </div>
          <p class="text-sm text-gray-200 dark:text-gray-700">
            Hey!.join our Discord...
          </p>
        </div>
      </PrimeButton>
      <PrimeButton
        severity="success"
        class="!absolute bottom-5 !mx-auto left-0 right-0 !w-[80%] !rounded-md"
      >
        <svg width="1.2rem" height="1.2rem">
          <use
            width="1.2rem"
            height="1.2rem"
            href="/img/icons.svg#send-message"
          ></use>
        </svg>
        <span>start new conversation</span>
      </PrimeButton>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.conversation {
  @apply pt-5 h-full transition-colors;
}
</style>
