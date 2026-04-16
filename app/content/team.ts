export interface TeamMember {
  name: string;
  /** One short line; avoid long bios */
  description: string;
  github: string;
  twitter: string;
}

import teamContentData from "./team.local.json";

export interface TeamContent {
  title: string;
  summary: string;
  note: string;
  members: TeamMember[];
}

export const teamContent: TeamContent = teamContentData;
