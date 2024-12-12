import { Divider, Menu } from "primevue";
import { NuxtLink } from "#components";
export default {
  props: {
    monitoring: {
      type: Array,
    },
    teams: {
      type: Array,
    },
    resources: {
      type: Array,
    },
  },

  setup(props: { monitoring: any; teams: any; resources: any }, context: any) {
    const { locale, t } = useI18n();
    const icons = [
      {
        href: "#facebook",
        svgId: "/img/icons.svg#facebook",
      },
      {
        href: "#twitter",
        svgId: "/img/icons.svg#twitter",
      },
      {
        href: "#linkedin",
        svgId: "/img/icons.svg#linkedin",
      },
      {
        href: "#telegram",
        svgId: "/img/icons.svg#telegram",
      },
    ];
    return () => [
      h(
        "footer",
        { class: "transition-colors pt-32 min-h-[calc(100vh-89px)]" },
        [
          h("div", { class: "container mx-auto px-10" }, [
            h(
              "div",
              {
                class: [
                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10",
                  locale.value === "en" ? "md:pl-[10rem]" : "md:pr-[10rem]",
                ],
              },
              [
                h(
                  "div",
                  {
                    class: [
                      "py-[.15rem]",
                      // locale.value === "en" ? "ml-20" : "mr-20",
                    ],
                  },
                  [
                    h(
                      "h5",
                      { class: "font-bold text-2xl" },
                      t("general.UptimeRobot")
                    ),
                    h(
                      "p",
                      { class: "text-lg my-2" },
                      t("footer.donwntimehappens")
                    ),
                    h(
                      "p",
                      {
                        class:
                          "w-4/5 text-gray-600 font-medium dark:text-gray-400 text-base",
                      },
                      t("footer.description")
                    ),
                    h("div", { class: "flex items-center mt-4" }, [
                      icons.map((item, index) => {
                        return h(
                          "a",
                          {
                            class: [
                              "router-link-active router-link-exact-active mx-1",
                              item.href == "#twitter"
                                ? "bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded-full flex items-center justify-center p-[.38rem]"
                                : null,
                            ],
                            "aria-current": "page",
                            href: item.href,
                          },
                          [
                            h(
                              "svg",
                              {
                                width:
                                  item.href === "#twitter" ? "1.22rem" : "2rem",
                                height:
                                  item.href === "#twitter" ? "1.22rem" : "2rem",
                                class: [
                                  item.href !== "#twitter"
                                    ? "text-gray-500 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                                    : "text-gray-100 dark:text-gray-800",
                                ],
                              },
                              h("use", {
                                width:
                                  item.href === "#twitter" ? "1.22rem" : "2rem",
                                height:
                                  item.href === "#twitter" ? "1.22rem" : "2rem",
                                href: item.svgId,
                              })
                            ),
                          ]
                        );
                      }),
                    ]),
                  ]
                ),
                h(Divider, {
                  pt: {
                    root: "md:!hidden",
                  },
                }),
                h(
                  Menu,
                  {
                    model: props.monitoring,
                    pt: {
                      root: "!border-none !rounded-none !px-10",
                      submenuLabel: "!p-0 mb-2 font-bold text-2xl",
                      item: "text-xl py-1 my-2",
                      itemContent:
                        "hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",

                      itemIcon: "!hidden",
                    },
                  },

                  {
                    submenulabel: ({ item }) => h("h5", t(item.label)),
                    item: ({ item }) =>
                      h(
                        "h5",
                        null,
                        h(NuxtLink, { to: item.path }, h("span", t(item.label)))
                      ),
                  }
                ),
                h(Divider, {
                  pt: {
                    root: "md:!hidden",
                  },
                }),
                h(
                  Menu,
                  {
                    model: props.teams,
                    pt: {
                      root: "!border-none !rounded-none !px-10",
                      submenuLabel: "!p-0 mb-2 font-bold text-2xl",
                      item: "text-xl py-1 my-2",
                      itemContent:
                        "hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",
                      itemIcon: "!hidden",
                    },
                  },

                  {
                    submenulabel: ({ item }) => h("h5", t(item.label)),
                    item: ({ item }) =>
                      h(
                        "h5",
                        null,
                        h(NuxtLink, { to: item.path }, h("span", t(item.label)))
                      ),
                  }
                ),
                h(Divider, {
                  pt: {
                    root: "md:!hidden",
                  },
                }),
                h(
                  Menu,
                  {
                    model: props.resources,
                    pt: {
                      root: "!border-none !rounded-none !px-10",
                      submenuLabel: "!p-0 mb-2 font-bold text-2xl",
                      item: "text-xl py-1 my-2",
                      itemContent:
                        "hover:!text-green-500 dark:hover:!text-primary-500 w-fit !h-[20px] !leading-4",
                      itemIcon: "!hidden",
                    },
                  },
                  {
                    submenulabel: ({ item }) => h("h5", t(item.label)),
                    item: ({ item }) =>
                      h("h5", h(NuxtLink, { to: item.path }, t(item.label))),
                  }
                ),
              ]
            ),
          ]),
        ]
      ),
    ];
  },
};
