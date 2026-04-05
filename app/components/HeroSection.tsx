export default function HeroSection() {
  return (
    <section id="vision" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8">
          <h1 className="manga-text text-7xl md:text-9xl mb-8">
            DARK
            <br />
            FOREST
            <br />
            <span className="text-pink-500">PUNK</span>
          </h1>

          <div className="bubble max-w-2xl mb-8">
            <p className="text-black font-bold text-lg">
              "We are DFArchon — the community that inherited Dark Forest and
              keeps the fog of war alive. From community rounds to a full MUD
              engine rebuild, we prove that fully onchain games belong to the
              players, not the company."
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <ManifestoCard />
            <StatusCard />
          </div>
        </div>

        <div className="md:col-span-4 relative">
          <div className="panel p-4 rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="h-64 bg-black flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 200 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block text-green-400 text-[8px] font-mono"
                  >
                    {Math.random() > 0.5 ? "1" : "0"}
                  </span>
                ))}
              </div>
              <div className="relative text-center">
                <div className="text-green-400 font-mono text-5xl mb-2">
                  DF
                </div>
                <div className="text-green-400 font-mono text-xs">
                  ARCHON_COLLECTIVE
                </div>
              </div>
            </div>
            <p className="text-xs mt-2 font-bold uppercase">
              EST. 2021 — DARK FOREST COMMUNITY
            </p>
          </div>

          <div className="absolute -bottom-10 -left-10 bg-black text-green-400 p-2 text-[10px] font-mono leading-tight">
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
    <div className="green-panel p-4 flex-1 min-w-[200px]">
      <h3 className="font-bold border-b-2 border-black mb-2">MANIFESTO</h3>
      <p className="text-sm">
        Fully onchain. Zero-knowledge. No central authority. Dark Forest proved
        that crypto games can be real — we're making sure they stay that way.
      </p>
    </div>
  );
}

function StatusCard() {
  return (
    <div className="panel p-4 flex-1 min-w-[200px]">
      <h3 className="font-bold border-b-2 border-black mb-2">
        ACTIVE SINCE 2021
      </h3>
      <ul className="text-xs space-y-1">
        <li>38 public repos</li>
        <li>5+ community rounds hosted</li>
        <li>Dark Forest Punk live on OP Mainnet</li>
      </ul>
    </div>
  );
}
