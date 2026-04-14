export interface TeamMember {
  name: string;
  /** One short line; avoid long bios */
  description: string;
  github: string;
  twitter: string;
}

export const teamContent = {
  title: "TEAM",
  summary: "core contributors",
  note:
    "Dark forest players tend to stay hidden, so this is only a partial public list.",
  members: [
    {
      name: "ddy",
      description: "developer",
      github: "https://github.com/fromddy",
      twitter: "https://x.com/ddy_mainland",
    },
  ] satisfies TeamMember[],
} as const;
