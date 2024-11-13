interface clickableElement extends HTMLElement {
  __clickOutsideHandler__: (e: Event) => void;
}

export default defineNuxtPlugin(({ vueApp }) => {
  const ClickOutsideDirective = {
    created(el: HTMLElement, binding: { value: (arg0: Event) => void }) {
      (el as clickableElement).__clickOutsideHandler__ = (event: Event) => {
        if (!(el == event.target || el.contains(event.target as Node | null))) {
          binding.value(event);
        }
      };
      document.body.addEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      );
      // binding.value()
    },
    onUnmounted(el: clickableElement) {
      document.body.removeEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      );
    },
  };

  vueApp.directive("click-outside", ClickOutsideDirective);
});
