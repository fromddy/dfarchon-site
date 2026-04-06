export default function HeroSection() {
  return (
    <section id="vision" className="relative">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <h1 className="manga-text mb-8 text-7xl md:text-9xl">
            DIGITAL
            <br />
            FRONTIER
            <br />
            <span className="text-pink-500">ARCHON</span>
          </h1>

          <div className="bubble mb-8 max-w-2xl">
            <p className="text-lg font-bold text-black">
              "We are DFArchon — the community that inherited Dark Forest and
              keeps the fog of war alive. From community rounds to a full MUD
              engine rebuild, we prove that fully onchain games belong to the
              players, not the company."
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <ManifestoCard />
            <StatusCard />
          </div>
        </div>

        <div className="relative md:col-span-4">
          <div className="panel rotate-2 p-4 transition-transform duration-300 hover:rotate-0">
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-black">
              <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 200 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block font-mono text-[8px] text-green-400"
                  >
                    {(i * 17 + 7) % 2 === 0 ? "1" : "0"}
                  </span>
                ))}
              </div>
              <div className="relative text-center">
                <div className="mb-2 font-mono text-5xl text-green-400">DF</div>
                <div className="font-mono text-xs text-green-400">
                  ARCHON_COLLECTIVE
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs font-bold uppercase">
              EST. 2021 — DARK FOREST COMMUNITY
            </p>
          </div>

          <div className="absolute -bottom-10 -left-10 bg-black p-2 font-mono text-[10px] leading-tight text-green-400">
            // zkSNARK_FOG_ACTIVE...
            <br />
            // MUD_ENGINE: ONLINE...
            <br />
            // COMMUNITY_ROUNDS: 5+
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoCard() {
  return (
    <div className="green-panel min-w-[200px] flex-1 p-4">
      <h3 className="mb-2 border-b-2 border-black font-bold">MANIFESTO</h3>
      <p className="text-sm">
        Fully onchain. Zero-knowledge. No central authority. Dark Forest proved
        that crypto games can be real — we're making sure they stay that way.
      </p>
    </div>
  );
}

function StatusCard() {
  return (
    <div className="panel min-w-[200px] flex-1 p-4">
      <h3 className="mb-2 border-b-2 border-black font-bold">
        ACTIVE SINCE 2021
      </h3>
      <ul className="space-y-1 text-xs">
        <li>38 public repos</li>
        <li>5+ community rounds hosted</li>
        <li>Dark Forest Punk live on OP Mainnet</li>
      </ul>
    </div>
  );
}
