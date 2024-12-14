export function finiteScrolling(
  id: string,
  sections: { [key: string]: boolean } | null,
  callBack: (items: { [key: string]: boolean } | null, isEnd: boolean) => void
) {
  const elm = document.querySelector(id) as HTMLElement;
  let isEnd: boolean = false;
  elm?.addEventListener(
    "scroll",
    (e) => {
      const el = e.target! as HTMLElement;
      if (el.scrollTop + el.clientHeight >= 0.8 * el.scrollHeight) {
        if (sections) {
          const keys: string[] = Object.keys(sections);
          for (let i = 0; i < keys.length; i++) {
            if (sections[keys[i]]) continue;
            else {
              sections[keys[i]] = true;
              if (
                sections[keys[i]] ===
                sections[keys[Object.keys(sections).length - 1]]
              )
                break;
            }
          }
        }
        isEnd = true;
      } else {
        isEnd = false;
      }
      callBack(sections, isEnd);
    },
    false
  );
}
