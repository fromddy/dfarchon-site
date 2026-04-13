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
    "Dark forest players tend to stay hidden, so below is only a partial list of active community members willing to make themselves public.",
  members: [
    {
      name: "ddy",
      description: "developer",
      github: "https://github.com/fromddy",
      twitter: "https://x.com/ddy_mainland",
    },
  ] satisfies TeamMember[],
} as const;
