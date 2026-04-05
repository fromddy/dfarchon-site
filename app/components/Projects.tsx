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
      <div className="h-48 bg-black relative flex items-center justify-center">
        <div className="text-green-400 font-mono text-center">
          <div className="text-3xl mb-1">&#9733;</div>
          <div className="text-xs">MUD ENGINE</div>
          <div className="text-xs opacity-50">13 stars</div>
        </div>
        <div className="absolute top-2 right-2 green-panel px-2 text-[10px] font-bold">
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
      <div className="h-48 bg-purple-900 relative flex items-center justify-center">
        <div className="text-white font-mono text-center">
          <div className="text-2xl font-bold mb-1">NOIR</div>
          <div className="text-xs opacity-70">Privacy-Native ZK</div>
        </div>
        <div className="absolute top-2 right-2 pink-panel px-2 text-[10px] font-bold">
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
      <div className="h-48 bg-green-500 relative flex items-center justify-center">
        <div className="text-black font-mono text-center font-bold">
          <div className="text-2xl mb-1">GAIA</div>
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
      <div className="h-48 bg-pink-500 relative flex items-center justify-center">
        <div className="text-white font-mono text-center font-bold">
          <div className="text-2xl mb-1">ARES</div>
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
      <h2 className="manga-text text-6xl mb-12">THE_LOOT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel overflow-hidden group block"
          >
            {project.imageContent}
            <div className="p-4">
              <h4 className="font-bold text-xl mb-1">{project.title}</h4>
              <p className="text-xs mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] opacity-50">
                  {project.version}
                </span>
                <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold group-hover:bg-pink-500 transition-colors">
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
