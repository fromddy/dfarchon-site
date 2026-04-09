export type TeamAccent = "green" | "pink" | "neutral";

export interface TeamMember {
  name: string;
  role: string;
  accent: TeamAccent;
  description: string;
}

export const teamContent = {
  title: "TEAM",
  summary: "core contributors",
  members: [
    {
      name: "ddy",
      role: "FULL-STACK",
      accent: "green",
      description:
        "Primary architect. 5 years blockchain exp. Circom, Solidity, TypeScript, React.",
    },
    {
      name: "9stx6",
      role: "FULL-STACK",
      accent: "pink",
      description:
        "Active contributor since 2021. Contracts, frontend, plugins. Top player across onchain games.",
    },
    {
      name: "Claude Zheng",
      role: "CONTRACTS",
      accent: "neutral",
      description:
        "Smart contract dev. 4 years web3. Solidity, Circom, Go. Ex-Celer, ARPA, Mantle.",
    },
    {
      name: "SansX",
      role: "SYSTEMS",
      accent: "green",
      description:
        "Backend specialist. Go, Rust, Python, TypeScript. Built replay engine & QA infra.",
    },
  ] satisfies TeamMember[],
} as const;
