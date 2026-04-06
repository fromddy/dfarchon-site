interface TeamMember {
  name: string;
  role: string;
  badgeStyle: "green-panel" | "pink-panel" | "panel";
  description: string;
}

const MEMBERS: TeamMember[] = [
  {
    name: "ddy",
    role: "FULL-STACK",
    badgeStyle: "green-panel",
    description:
      "Primary architect. 5 years blockchain exp. Circom, Solidity, TypeScript, React.",
  },
  {
    name: "9stx6",
    role: "FULL-STACK",
    badgeStyle: "pink-panel",
    description:
      "Active contributor since 2021. Contracts, frontend, plugins. Top player across onchain games.",
  },
  {
    name: "3b",
    role: "CONTRACTS",
    badgeStyle: "panel",
    description:
      "Smart contract dev. 4 years web3. Solidity, Circom, Go. Ex-Celer, ARPA, Mantle.",
  },
  {
    name: "SansX",
    role: "SYSTEMS",
    badgeStyle: "green-panel",
    description:
      "Backend specialist. Go, Rust, Python, TypeScript. Built replay engine & QA infra.",
  },
  {
    name: "zkyu",
    role: "ZK_ENG",
    badgeStyle: "pink-panel",
    description:
      "Cryptography engineer. 7 years exp. zkRollup, ZK proofs, multi-chain L2.",
  },
];

export default function Team() {
  return (
    <section id="team">
      <h2 className="manga-text mb-4 text-6xl">THE_NODES</h2>
      <p className="mb-12 text-sm text-gray-400">
        2 full-time + 3 part-time developers
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {MEMBERS.map((member) => (
          <div key={member.name} className="panel group p-4">
            <div className="mb-3 flex h-24 items-center justify-center border-2 border-black bg-black">
              <span className="font-mono text-2xl font-bold text-green-400">
                {member.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div
              className={`${member.badgeStyle} mb-2 inline-block px-2 text-[10px] font-bold uppercase`}
            >
              {member.role}
            </div>
            <div className="mb-1 text-sm font-bold">{member.name}</div>
            <p className="text-[10px] opacity-60">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
