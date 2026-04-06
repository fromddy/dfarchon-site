const STACK_ITEMS = [
  {
    label: "TypeScript",
    description: "Primary language across all projects",
    style: "panel",
  },
  {
    label: "Solidity",
    description: "Smart contracts & ERC-2535 Diamond",
    style: "pink-panel",
  },
  {
    label: "Circom / zkSNARK",
    description: "Zero-knowledge fog of war circuits",
    style: "green-panel",
  },
  {
    label: "MUD Engine",
    description: "Onchain game framework by Lattice",
    style: "panel",
  },
  {
    label: "Noir / Aztec",
    description: "Privacy-native L2 & ZK language",
    style: "pink-panel",
  },
  {
    label: "React",
    description: "Game client & web frontends",
    style: "green-panel",
  },
];

export default function TechStack() {
  return (
    <section id="tech">
      <h2 className="manga-text mb-12 text-6xl">THE_STACK</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {STACK_ITEMS.map((item) => (
          <div key={item.label} className={`${item.style} p-4`}>
            <div className="mb-1 text-sm font-bold uppercase">{item.label}</div>
            <div className="text-[10px] opacity-70">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
