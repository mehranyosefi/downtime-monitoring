export const useWindowProperty = () => {
  const windowWidth = ref<number>(import.meta.client ? window.innerWidth : 0);
  onMounted(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
  const isOnMobile = computed(() => {
    if (windowWidth.value > 576) return false;
    return true;
  });
  const isOnTablet = computed(() => {
    if (windowWidth.value > 1024) return false;
    return true;
  });
  return { windowWidth, isOnMobile, isOnTablet };
};
