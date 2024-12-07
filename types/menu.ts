export interface KeyValuePairs<key, value> {
  key: key;
  value: value;
}

export interface MegaMenuInterface {
  label: string;
  path?: string;
  items?: {
    label: string;
    icon?: string;
    path?: string;
    content?: string;
  }[];
}

export class MegaMenu implements MegaMenuInterface {
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

export class Trust {
  userName: string;
  title: string;
  content: string;
  link: string;

  constructor(userName: string, title: string, content: string, link: string) {
    this.userName = userName;
    this.title = title;
    this.content = content;
    this.link = link;
  }
}

export const headerMegaMenu: MegaMenuInterface[] = [
  new MegaMenu("monitoring.monitoring", undefined, [
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
  new MegaMenu("integrations", "#integrations"),
  new MegaMenu("statusPage", "#status-page"),
  new MegaMenu("pricing", "#pricing"),
];
export const headerMegaMenuTeamItems: MegaMenuInterface[] = [
  new MegaMenu("teams", undefined, [
    {
      label: "teams.devops",
      // command: () => {
      //   router.push("/introduction");
      // },
      path: "#devops",
    },
    {
      label: "teams.developers",
      path: "#developer",
    },
    {
      label: "teams.marketers",
      path: "#marketers",
    },
    {
      label: "teams.support",
      path: "#support",
    },
    {
      label: "teams.businessOwners",
      path: "#business-owners",
    },
  ]),
];
