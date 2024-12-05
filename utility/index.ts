export function infiniteScrolling(
  id: string,
  sections: { [key: string]: boolean },
  callBack: (items: { [key: string]: boolean }) => void
) {
  const elm = document.querySelector(id) as HTMLElement;
  elm?.addEventListener(
    "scroll",
    (e) => {
      /* set --scroll var for bind anitmaion to scroll*/
      const el = e.target! as HTMLElement;
      let size = el.scrollTop / (el.scrollHeight - Number(el.style.height));
      document.documentElement.style.setProperty(
        "--scroll",
        Math.min(size * 2.1, 1.5).toString()
      );
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        const keys: string[] = Object.keys(sections);
        for (let i = 0; i < keys.length; i++) {
          if (sections[keys[i]]) continue;
          else {
            sections[keys[i]] = true;
            break;
          }
        }

        callBack(sections);
      }
    },
    false
  );
}
