export function infiniteScrolling(
  id: string,
  sections: { [key: string]: boolean },
  callBack: (items: { [key: string]: boolean }) => void
) {
  const elm = document.querySelector(id) as HTMLElement;
  elm?.addEventListener(
    "scroll",
    (e) => {
      const el = e.target! as HTMLElement;
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
