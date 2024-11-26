export interface KeyValuePairs<key, value> {
  key: key;
  value: value;
}

export interface MegaMenuItemInterface {
  label: string;
  path?: string;
  items?: {
    label: string;
    icon?: string;
    path?: string;
    content?: string;
  }[];
}

export class MegaMenuItem implements MegaMenuItemInterface {
  label: string;
  path?: string;
  items?: { label: string; icon?: string; path?: string; content?: string }[];
  constructor(
    label: string,
    path?: string,
    items:
      | { label: string; icon?: string; path?: string; content?: string }[]
      | undefined = undefined
  ) {
    this.label = label;
    this.path = path;
    this.items = items;
  }
}

export const headerMegaMenuItems: MegaMenuItemInterface[] = [
  new MegaMenuItem("monitoring.monitoring", undefined, [
    {
      label: "monitoring.website",
      icon: "/img/icons.svg#website-monitoring",
      path: "#website-monitoring",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo reprehenderit accusantium voluptatem",
    },
    {
      label: "monitoring.port",
      icon: "/img/icons.svg#port-monitoring",
      path: "#port-monitoring",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo reprehenderit accusantium voluptatem",
    },
    {
      label: "monitoring.keyword",
      icon: "/img/icons.svg#keyword-monitoring",
      path: "#keyword-monitoring",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo reprehenderit accusantium voluptatem",
    },
  ]),
  new MegaMenuItem("integrations", "integrations"),
  new MegaMenuItem("statusPage", "status-page"),
  new MegaMenuItem("pricing", "pricing"),
];
export const headerMegaMenuFooterItems: MegaMenuItemInterface[] = [
  new MegaMenuItem("teams", undefined, [
    {
      label: "teams.devops",
      // command: () => {
      //   router.push("/introduction");
      // },
      path: "DevOps",
    },
    {
      label: "teams.developers",
      path: "developer",
    },
    {
      label: "teams.marketers",
      path: "marketers",
    },
    {
      label: "teams.support",
      path: "support",
    },
    {
      label: "teams.businessOwners",
      path: "business-owners",
    },
  ]),
];
