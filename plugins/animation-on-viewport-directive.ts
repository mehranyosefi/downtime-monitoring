export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animation-on-viewport", {
    mounted(
      el: HTMLElement,
      binding: { value: string; arg?: string | undefined }
    ) {
      // function callback(
      //   entires: IntersectionObserverEntry[],
      //   observer: IntersectionObserver
      // ) {
      //   entires.forEach((entry) => {
      //     // const targetElement = entry.target;
      //     if (entry.intersectionRatio > 0) {
      //       el.classList.add("animate");
      //     }
      //     if (!entry.isIntersecting) {
      //       el.classList.remove("animate");
      //       //
      //     }
      //   });

      // }
      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            el.classList.add("viewportanimation");
          } else {
            el.classList.remove("viewportanimation");
          }
        });
      };
      const options: IntersectionObserverInit = {
        threshold: 0,
        rootMargin: "0px",
      };
      const io = new IntersectionObserver(callback, options);
      io.observe(el);
    },
  });
});
