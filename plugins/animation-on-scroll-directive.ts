import type { DirectiveBinding } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animation-on-scroll", {
    mounted(el: HTMLElement, binding: DirectiveBinding<any, string, string>) {
      const container = binding.arg
        ? (document.querySelector(binding.arg) as HTMLElement)
        : (document.querySelector(".main") as HTMLElement);

      container.addEventListener(
        "scroll",
        (e) => {
          const properties = el.getBoundingClientRect();
          const middleHeight = container.offsetHeight / 2;
          const middleWidth = container.offsetWidth / 2;
          if (!binding.value) {
            const ratio =
              (container.offsetHeight - properties.top) / (0.9 * middleHeight);
            el.style.opacity = Math.min(ratio, 1).toString();
            el.style.transform = `scale(${Math.min(ratio, 1)})`;
          } else if (
            binding.value === "slide-left" ||
            binding.value === "slide-right"
          ) {
            const ratio =
              (properties.top - container.offsetHeight + middleHeight) /
              (Number(properties.height) + middleHeight);
            let size;
            if (binding.value === "slide-left")
              size = Math.min(-ratio * middleWidth, 0);
            else size = Math.max(ratio * middleWidth, 0);

            el.style.transform = `translateX(${size}px )`;
          } else if (
            binding.value === "slide-bottom" ||
            binding.value === "slide-top"
          ) {
            const ratio =
              (properties.top - container.offsetHeight + middleHeight) /
              (Number(properties.height) + middleHeight);
            let size;
            if (binding.value === "slide-bottom")
              size = Math.max(ratio * middleHeight, 0);
            else size = Math.min(-ratio * middleHeight, 0);
            el.style.transform = `translateY(${size}px )`;
          }
        },
        false
      );
    },
  });
});
