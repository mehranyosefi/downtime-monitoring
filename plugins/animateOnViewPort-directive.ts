export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate", {
    mounted(
      el: HTMLElement,
      binding: { value: string; arg?: string | undefined }
    ) {
      const callback: IntersectionObserverCallback = (
        entires: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        entires.forEach((entry: IntersectionObserverEntry) => {
          const targetElement = entry.target;
          if (entry.isIntersecting) {
            if (binding.value) {
              targetElement.classList.add("animate");
              targetElement.classList.add(`aniamte-${binding.value}`);
            } else targetElement.classList.add("animate");
          } else {
            if (binding.value) {
              targetElement.classList.remove("animate");
              targetElement.classList.remove(`aniamte-${binding.value}`);
            } else targetElement.classList.remove("animate");
          }
        });
      };
      const options: IntersectionObserverInit = {
        root: binding?.arg ? document.querySelector(binding.arg) : null,
        threshold: [0.01, 0.1, 0.5, 1],
        rootMargin: "0px",
      };
      const io = new IntersectionObserver(callback, options);
      io.observe(el);
    },
    // getSSRProps(binding, vnode) {
    //   // you can provide SSR-specific props here
    //   return {};
    // },
  });
});
