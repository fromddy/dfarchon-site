export interface PageMeta {
  title: string;
  description: string;
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
  pageMeta: {
    home: {
      title: "DFArchon | About",
      description: "About the DFArchon research collective",
    },
    projects: {
      title: "DFArchon | Projects",
      description: "Projects built by DFArchon",
    },
    team: {
      title: "DFArchon | Team",
      description: "Meet the DFArchon team",
    },
    timeline: {
      title: "DFArchon | Timeline",
      description: "DFArchon development timeline",
    },
    writings: {
      title: "DFArchon | Writings",
      description: "Writings and essays from DFArchon",
    },
  } satisfies Record<string, PageMeta>,
} as const;
