interface ProjectCard {
  title: string;
  description: string;
  version: string;
  url: string;
  imageContent: React.ReactNode;
}

const PROJECTS: ProjectCard[] = [
  {
    title: "DARK FOREST PUNK",
    description:
      "Full rebuild of Dark Forest on the MUD engine. New artifacts, guild system, AI agents, and high-throughput transactions. Live on OP Mainnet.",
    version: "LIVE — dfpunk.xyz",
    url: "https://github.com/dfarchon/darkforest-punk",
    imageContent: (
      <div className="relative flex h-48 items-center justify-center bg-black">
        <div className="text-center font-mono text-green-400">
          <div className="mb-1 text-3xl">&#9733;</div>
          <div className="text-xs">MUD ENGINE</div>
          <div className="text-xs opacity-50">13 stars</div>
        </div>
        <div className="green-panel absolute top-2 right-2 px-2 text-[10px] font-bold">
          LIVE
        </div>
      </div>
    ),
  },
  {
    title: "DF ON AZTEC",
    description:
      "Porting Dark Forest to the Aztec privacy-focused L2 using Noir. Native private execution for fog of war without off-chain ZK.",
    version: "DEVNET",
    url: "https://github.com/dfarchon/dfpunk-aztec",
    imageContent: (
      <div className="relative flex h-48 items-center justify-center bg-purple-900">
        <div className="text-center font-mono text-white">
          <div className="mb-1 text-2xl font-bold">NOIR</div>
          <div className="text-xs opacity-70">Privacy-Native ZK</div>
        </div>
        <div className="pink-panel absolute top-2 right-2 px-2 text-[10px] font-bold">
          DEV
        </div>
      </div>
    ),
  },
  {
    title: "DF-GAIA",
    description:
      "Plugin development library for Dark Forest. Tool functions, UI panels, and modular sections for players and developers.",
    version: "v0.6.5 COMPAT",
    url: "https://github.com/dfarchon/DF-GAIA",
    imageContent: (
      <div className="relative flex h-48 items-center justify-center bg-green-500">
        <div className="text-center font-mono font-bold text-black">
          <div className="mb-1 text-2xl">GAIA</div>
          <div className="text-xs">Plugin Framework</div>
          <div className="text-xs opacity-50">10 stars</div>
        </div>
      </div>
    ),
  },
  {
    title: "DFARES",
    description:
      "Community-maintained Dark Forest fork for hosting community rounds. ERC-2535 Diamond architecture. Deployed on Redstone.",
    version: "v0.1",
    url: "https://github.com/dfarchon/DFARES-v0.1",
    imageContent: (
      <div className="relative flex h-48 items-center justify-center bg-pink-500">
        <div className="text-center font-mono font-bold text-white">
          <div className="mb-1 text-2xl">ARES</div>
          <div className="text-xs">Community Rounds</div>
          <div className="text-xs opacity-70">7 stars</div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="manga-text mb-12 text-6xl">THE_LOOT</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel group block overflow-hidden"
          >
            {project.imageContent}
            <div className="p-4">
              <h4 className="mb-1 text-xl font-bold">{project.title}</h4>
              <p className="mb-4 text-xs">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] opacity-50">
                  {project.version}
                </span>
                <div className="flex h-8 w-8 items-center justify-center bg-black font-bold text-white transition-colors group-hover:bg-pink-500">
                  -&gt;
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
