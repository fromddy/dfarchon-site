import Marquee from "./Marquee";

const SYSTEM_LOGS = [
  "[00:00:01] DFARCHON_HUB_INITIALIZED",
  "[00:00:05] CONNECTING TO DIGITAL WORLD ...",
  "[00:00:12] SYNCING BLOCKCHAIN [OK]",
  "[00:00:15] ONCHAIN_REALITY: ACTIVE",
];

const SOCIAL_LINKS = [
  { label: "TWITTER", href: "https://x.com/DFArchon" },
  { label: "GITHUB", href: "https://github.com/dfarchon" },
  { label: "BLOG", href: "https://paragraph.com/@dfarchon" },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t-8 border-black pt-12 pb-24">
      <div className="-mx-4 md:-mx-8">
        <Marquee />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="manga-text mb-4 text-4xl"> DFARCHON </h3>
          <p className="max-w-md text-sm">
            DFArchon is a community dedicated to the pursuit of onchain reality,
            composed of enthusiasts passionate about emerging technologies.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Founded in 2021
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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
          <h4 className="mb-4 font-bold uppercase">SYSTEM_LOG</h4>
          <div className="space-y-1 font-mono text-[10px] opacity-80">
            {SYSTEM_LOGS.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
