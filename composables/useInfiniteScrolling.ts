export function useInfiniteScrolling(elm: HTMLElement, callBack: () => void) {
  elm?.addEventListener("scroll", (e) => {
    const el = e.target! as HTMLElement;
    if (el?.scrollTop + el?.clientHeight >= el?.scrollHeight - 10) {
      return callBack();
    }
  });
}
