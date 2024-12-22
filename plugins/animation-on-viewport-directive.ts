export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animation-on-viewport", {
    mounted(
      el: HTMLElement,
      binding: { value: string; arg?: string | undefined }
    ) {
      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (binding.value)
              entry.target.classList.add(`${binding.value}-animation`);
            else entry.target.classList.add(`slide-left-animation`);
          } else {
            if (binding.value)
              entry.target.classList.remove(`${binding.value}-animation`);
            else entry.target.classList.remove(`slide-left-animation`);
          }
        });
      };
      const options: IntersectionObserverInit = {
        threshold: binding.arg ? parseInt(binding.arg) : 0,
        rootMargin: "0px",
      };
      const io = new IntersectionObserver(callback, options);
      io.observe(el);
    },
  });
});
