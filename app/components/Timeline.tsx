type Category = "launch" | "grant" | "milestone" | "community";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  category: Category;
}

const CATEGORIES: { key: Category; label: string; color: string; shape: "diamond" | "circle" | "circle-outline" }[] = [
  { key: "launch", label: "LAUNCH", color: "bg-white", shape: "diamond" },
  { key: "grant", label: "GRANT", color: "bg-yellow-400", shape: "diamond" },
  { key: "milestone", label: "MILESTONE", color: "bg-white", shape: "circle" },
  { key: "community", label: "COMMUNITY", color: "border-white border-2 bg-transparent", shape: "circle-outline" },
];

const EVENTS: TimelineEntry[] = [
  {
    date: "2025-Q4",
    title: "Devconnect 2025",
    description:
      "DFArchon exhibits at Devconnect 2025 Gaming District for a full week, showcasing Dark Forest Punk and the broader onchain gaming vision.",
    category: "community",
  },
  {
    date: "2025-Q2",
    title: "ETH Singapore — d/acc Day",
    description:
      "Team speaks at d/acc Day at ETH Singapore 2025, presenting the vision for the Onchain Reality Universe.",
    category: "community",
  },
  {
    date: "2025-Q1",
    title: "web3gamehub.xyz Launch",
    description:
      "Launched web3gamehub.xyz, an aggregator for the fully onchain gaming ecosystem.",
    category: "launch",
  },
  {
    date: "2024-Q4",
    title: "Dark Forest Punk — Redstone Mainnet",
    description:
      "Six-day test round on Redstone mainnet generates 98,180+ transactions and ~87.3 billion gas consumed. First full community round of the MUD rebuild.",
    category: "launch",
  },
  {
    date: "2024-Q3",
    title: "Optimism Grant — 60k OP",
    description:
      "Received ~60,000 OP tokens from Optimism to support Dark Forest Punk development and community rounds on OP Mainnet.",
    category: "grant",
  },
  {
    date: "2024-Q2",
    title: "Dark Forest Punk — MUD Engine Rebuild",
    description:
      "Completed the full port of Dark Forest to the MUD engine framework in a 2-month turnaround. New artifacts, guild system, and AI agent integration.",
    category: "milestone",
  },
  {
    date: "2023-Q4",
    title: "DFARES v0.1 Community Rounds",
    description:
      "Launched the community-maintained Dark Forest fork with ERC-2535 Diamond architecture. Multiple rounds hosted on Redstone blockchain.",
    category: "launch",
  },
  {
    date: "2023-Q2",
    title: "Mask Network Grant — $10k",
    description:
      "Received $10,000 grant from Mask Network to support continued Dark Forest community development.",
    category: "grant",
  },
  {
    date: "2022-Q3",
    title: "DF-ARTEMIS — Bounty System",
    description:
      "Released DF-ARTEMIS, a planet-targeted bounty mercenary system creating a secondary game economy within Dark Forest.",
    category: "launch",
  },
  {
    date: "2022-Q2",
    title: "DF-GAIA Plugin Framework",
    description:
      "Released DF-GAIA, a comprehensive plugin development library for Dark Forest v0.6.5. Tool functions, UI panels, and modular sections for players and developers.",
    category: "launch",
  },
  {
    date: "2022-Q1",
    title: "Gitcoin Grants — ~$10k",
    description:
      "Funded via Gitcoin grants to bootstrap community tooling and plugin infrastructure for Dark Forest.",
    category: "grant",
  },
  {
    date: "2021-Q4",
    title: "DFArchon Founded",
    description:
      "Team formed by competitive Dark Forest players (ddy ranked #9 on v0.6.3 leaderboard). Organization established on GitHub, October 31, 2021.",
    category: "milestone",
  },
];

function CategoryMarker({ category }: { category: Category }) {
  const cat = CATEGORIES.find((c) => c.key === category)!;
  if (cat.shape === "diamond") {
    return (
      <div
        className={`w-3 h-3 ${cat.color} rotate-45 shrink-0`}
      />
    );
  }
  if (cat.shape === "circle-outline") {
    return (
      <div className="w-3 h-3 rounded-full border-2 border-white shrink-0" />
    );
  }
  return <div className={`w-3 h-3 rounded-full ${cat.color} shrink-0`} />;
}

export default function Timeline() {
  return (
    <div>
      <h1
        className="font-bold text-6xl md:text-7xl mb-6 uppercase tracking-widest"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        TIMELINE
      </h1>
      <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-10">
        From Dark Forest players to onchain game builders — three years of
        community-driven development.
      </p>

      {/* Category legend */}
      <div className="flex flex-wrap gap-6 mb-12">
        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="flex items-center gap-2 text-xs uppercase tracking-wide">
            <CategoryMarker category={cat.key} />
            <span className={cat.key === "grant" ? "text-yellow-400" : "text-gray-300"}>
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-gray-950 border-4 border-gray-800 p-6 md:p-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gray-700" />

          <div className="space-y-12">
            {EVENTS.map((event, i) => (
              <div key={i} className="relative pl-10">
                {/* Marker */}
                <div className="absolute left-0 top-1">
                  <CategoryMarker category={event.category} />
                </div>

                {/* Date */}
                <div className="text-green-400 text-xs font-mono mb-2 border-b border-gray-800 pb-2 inline-block">
                  {event.date}
                </div>

                {/* Title */}
                <h3
                  className="text-white text-xl md:text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
