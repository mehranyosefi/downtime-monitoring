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
    faContent?: string;
  }[];
}

export class MegaMenu implements MegaMenuInterface {
  label: string;
  path?: string;
  items?: {
    label: string;
    icon?: string;
    path?: string;
    content?: string;
    faContent?: string;
  }[];
  constructor(
    label: string,
    path?: string,
    items:
      | {
          label: string;
          icon?: string;
          path?: string;
          content?: string;
          faContent?: string;
        }[]
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
        "Be the first to know that your website is down! Reliable monitoring warns you before any significant trouble and saves you money.",
      faContent:
        "اولین کسی باشید که می دانید وب سایت شما از کار افتاده است! نظارت قابل اعتماد قبل از هر مشکل مهمی به شما هشدار می دهد و باعث صرفه جویی در هزینه شما می شود.",
    },
    {
      label: "monitoring.port",
      icon: "/img/icons.svg#port-monitoring",
      path: "#port-monitoring",
      content:
        "Is the email service still UP? How about the critical database server? Let's check! Monitor any specific service running on any port.",
      faContent:
        "آیا سرویس ایمیل هنوز فعال است؟ سرور پایگاه داده بحرانی چطور؟ بیایید بررسی کنیم! نظارت بر هر سرویس خاصی که در هر پورتی اجرا می شود.",
    },
    {
      label: "monitoring.keyword",
      icon: "/img/icons.svg#keyword-monitoring",
      path: "#keyword-monitoring",
      content:
        "Use keyword monitoring to check presence or absence of specific text in the request's response body (typically HTML or JSON).",
      faContent:
        "از نظارت بر کلمه کلیدی برای بررسی وجود یا عدم وجود متن خاص در بدنه پاسخ درخواست (معمولاً HTML یا JSON) استفاده کنید.",
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
