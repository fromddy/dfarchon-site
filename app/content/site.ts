export interface PageMeta {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface SiteSeoConfig {
  defaultKeywords: string[];
  ogImagePath: string;
  twitterHandle: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteContent = {
  brand: {
    name: "DFArchon",
    displayName: "DFARCHON",
    foundedYear: 2021,
    intro:
      "DFArchon is a community dedicated to the pursuit of onchain reality, composed of enthusiasts passionate about emerging technologies.",
  },
  hero: {
    titleLines: ["DIGITAL", "FRONTIER", "ARCHON"],
    tvMessage: "NICE TO MEET YOU",
    visionTitle: "OUR VISION",
    visionStatements: [
      "We hope to build self-sovereign digital worlds.",
      "We value decentralization and privacy.",
    ],
    statusTitle: "ACTIVE SINCE 2021",
    statusItems: [
      "10 Dark Forest community rounds hosted",
      "Active in fully onchain gaming ecosystem",
      "Track the latest cutting-edge technologies",
    ],
  },
  footer: {
    marqueeText:
      "FULLY ONCHAIN GAMES — DARK FOREST LIVES — ZK FOG OF WAR — ONCHAIN REALITY — DECENTRALIZATION - PRIVACY — COMMUNITY OWNED — NO OFF-SWITCH — ",
    socialLinks: [
      { label: "TWITTER", href: "https://x.com/DFArchon" },
      { label: "GITHUB", href: "https://github.com/dfarchon" },
      { label: "BLOG", href: "https://paragraph.com/@dfarchon" },
    ] satisfies SocialLink[],
    systemLogs: [
      "[00:00:01] DFARCHON_HUB_INITIALIZED",
      "[00:00:05] CONNECTING TO DIGITAL WORLD ...",
      "[00:00:12] SYNCING BLOCKCHAIN [OK]",
      "[00:00:15] ONCHAIN_REALITY: ACTIVE",
    ],
  },
  seo: {
    defaultKeywords: [
      "DFArchon",
      "Dark Forest",
      "onchain gaming",
      "fully onchain games",
      "crypto gaming",
      "zk gaming",
      "onchain reality",
      "web3 community",
    ],
    ogImagePath: "/logo.jpg",
    twitterHandle: "@DFArchon",
  } satisfies SiteSeoConfig,
  pageMeta: {
    home: {
      title: "DFArchon | About",
      description:
        "Learn about DFArchon, a community exploring onchain reality through Dark Forest, fully onchain games, and emerging decentralized technologies.",
      path: "/",
      keywords: ["DFArchon about", "Dark Forest community", "onchain research collective"],
    },
    projects: {
      title: "DFArchon | Projects",
      description:
        "Explore DFArchon projects spanning Dark Forest experiments, community rounds, and fully onchain game infrastructure.",
      path: "/projects",
      keywords: ["DFArchon projects", "Dark Forest tools", "fully onchain game projects"],
    },
    team: {
      title: "DFArchon | Team",
      description:
        "Meet the DFArchon contributors building community rounds, experimental systems, and onchain gaming experiences.",
      path: "/team",
      keywords: ["DFArchon team", "onchain builders", "Dark Forest contributors"],
    },
    timeline: {
      title: "DFArchon | Timeline",
      description:
        "Follow the DFArchon timeline from early Dark Forest plugins to public community rounds, MUD migration, and onchain game releases.",
      path: "/timeline",
      keywords: ["DFArchon timeline", "Dark Forest history", "onchain gaming roadmap"],
    },
    writings: {
      title: "DFArchon | Writings",
      description:
        "Read DFArchon writings on onchain reality, decentralized worlds, Dark Forest, and the future of fully onchain games.",
      path: "/writings",
      keywords: ["DFArchon writings", "onchain essays", "Dark Forest articles"],
    },
  } satisfies Record<string, PageMeta>,
} as const;

export function getPageMetaDescriptors(page: PageMeta) {
  const keywords = [...siteContent.seo.defaultKeywords, ...(page.keywords ?? [])].join(", ");

  return [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
  ];
}
