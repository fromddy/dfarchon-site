export type ProjectTheme = "dark" | "purple" | "green" | "pink";
export type ProjectBadgeTone = "green" | "pink";

export interface ProjectShowcase {
  theme: ProjectTheme;
  headline: string;
  subheadline: string;
  meta?: string;
  icon?: string;
  badge?: {
    label: string;
    tone: ProjectBadgeTone;
  };
}

export interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  status: string;
  url: string;
  showcase: ProjectShowcase;
}

export const projectsContent = {
  title: "PROJECTS",
  items: [
    {
      slug: "dark-forest-punk",
      title: "DARK FOREST PUNK",
      description:
        "Full rebuild of Dark Forest on the MUD engine. New artifacts, guild system, AI agents, and high-throughput transactions. Live on OP Mainnet.",
      status: "LIVE — dfpunk.xyz",
      url: "https://github.com/dfarchon/darkforest-punk",
      showcase: {
        theme: "dark",
        icon: "★",
        headline: "MUD ENGINE",
        subheadline: "13 stars",
        badge: {
          label: "LIVE",
          tone: "green",
        },
      },
    },
    {
      slug: "df-on-aztec",
      title: "DF ON AZTEC",
      description:
        "Porting Dark Forest to the Aztec privacy-focused L2 using Noir. Native private execution for fog of war without off-chain ZK.",
      status: "DEVNET",
      url: "https://github.com/dfarchon/dfpunk-aztec",
      showcase: {
        theme: "purple",
        headline: "NOIR",
        subheadline: "Privacy-Native ZK",
        badge: {
          label: "DEV",
          tone: "pink",
        },
      },
    },
    {
      slug: "df-gaia",
      title: "DF-GAIA",
      description:
        "Plugin development library for Dark Forest. Tool functions, UI panels, and modular sections for players and developers.",
      status: "v0.6.5 COMPAT",
      url: "https://github.com/dfarchon/DF-GAIA",
      showcase: {
        theme: "green",
        headline: "GAIA",
        subheadline: "Plugin Framework",
        meta: "10 stars",
      },
    },
    {
      slug: "dfares",
      title: "DFARES",
      description:
        "Community-maintained Dark Forest fork for hosting community rounds. ERC-2535 Diamond architecture. Deployed on Redstone.",
      status: "v0.1",
      url: "https://github.com/dfarchon/DFARES-v0.1",
      showcase: {
        theme: "pink",
        headline: "ARES",
        subheadline: "Community Rounds",
        meta: "7 stars",
      },
    },
  ] satisfies ProjectEntry[],
} as const;
