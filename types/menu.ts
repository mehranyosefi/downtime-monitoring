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

export const trustItems = [
  {
    userName: "Basem",
    title: "Reliable service",
    content:
      "It was a wonderful experience and I would highly recommend it. UptimeRobot has exceeded my expectations with its efficient monitoring and notification system. Thanks to their service, I've been able to stay on top of any downtime issues and ensure maximum uptime for my online presence, highly recommended!",
    link: "Capterra.com",
  },
  {
    userName: "Michael N., Director of Media Relations",
    title: "UptimeRobot Works Great!",
    content:
      "Our Native Amerrican news magazine/public service website is www.nativeamericatoday.com. Our former developer did a horrible job, which continually allowed bots to attack the site -- we went over our server's resource limits multiple times and crashed",
    link: "G2.com",
  },
  {
    userName: "Michael Palmer",
    title: "Piece of Mind Monitoring",
    content:
      "I have recently moved monitoring to UptimeRobot for some critical links and external facing services within our organization. Internal monitoring programs are great until the internet is down and you don't know because you can't get the alerts out",
    link: "Trustpilot.com",
  },
];

export const faTrustItems = [
  {
    userName: "باسم",
    title: "خدمات قابل اعتماد",
    content:
      "تجربه فوق العاده ای بود و من آن را به شدت توصیه می کنم. ربات زمان کار با سیستم نظارت و اطلاع رسانی کارآمد خود از انتظارات من فراتر رفته است. به لطف خدمات آنها، من توانسته ام از مشکلات مربوط به خرابی مراقبت کنم و حداکثر زمان را برای حضور آنلاین خود تضمین کنم، به شدت توصیه می شود!",
    link: "Capterra.com",
  },
  {
    userName: "مایکل",
    title: "ربات زمان کار عالی کار می کند!",
    content:
      "توسعه دهنده سابق ما کار وحشتناکی انجام داد، که به طور مداوم به ربات ها اجازه حمله به سایت را می داد -- ما چندین بار از محدودیت های منابع سرور خود عبور کردیم و از کار افتادیم",
    link: "G2.com",
  },
  {
    userName: "مایکل پالمر",
    title: "نظارت تکه ای از ذهن",
    content:
      "من اخیراً نظارت را برای برخی پیوندهای مهم و سرویس های خارجی در سازمان خود به ربات زمان کار منتقل کرده ام. برنامه های نظارت داخلی عالی هستند تا زمانی که اینترنت قطع شود و شما نمی دانید زیرا نمی توانید هشدارها را دریافت کنید",
    link: "Trustpilot.com",
  },
];
