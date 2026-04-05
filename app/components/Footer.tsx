const SYSTEM_LOGS = [
  "[00:00:01] ARCHON_HUB_INITIALIZED",
  "[00:00:05] CONNECTING TO DARK_FOREST...",
  "[00:00:12] SYNCING MUD_ENGINE [OK]",
  "[00:00:15] ZK_FOG_OF_WAR: ACTIVE",
  "[00:00:20] COMMUNITY_ROUNDS: 5+ COMPLETED",
  "[00:00:25] ONCHAIN_REALITY: OPERATIONAL",
];

const SOCIAL_LINKS = [
  { label: "TWITTER", href: "https://x.com/DFArchon" },
  { label: "GITHUB", href: "https://github.com/dfarchon" },
  { label: "BLOG", href: "https://paragraph.com/@dfarchon" },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t-8 border-black pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="manga-text text-4xl mb-4">JOIN_THE_FOG</h3>
        <p className="text-sm max-w-md">
          DFArchon is a research collective building fully onchain games and
          autonomous worlds. We inherited Dark Forest and we're not letting go.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          dfarchon@gmail.com &middot; EST. 2021
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link bg-black text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="green-panel p-8">
        <h4 className="font-bold mb-4 uppercase">SYSTEM_LOG</h4>
        <div className="font-mono text-[10px] space-y-1 opacity-80">
          {SYSTEM_LOGS.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}
