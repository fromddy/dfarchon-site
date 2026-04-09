export default function HeroSection() {
  return (
    <section id="vision" className="relative">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-2">
        <div className="w-full md:min-w-0 md:flex-1">
          <h1 className="manga-text mb-8 text-7xl md:text-9xl">
            DIGITAL
            <br />
            FRONTIER
            <br />
            <span className="text-pink-500">ARCHON</span>
          </h1>

          <div className="bubble mb-8 max-w-2xl">
            <p className="text-lg font-bold text-black">

              DFArchon is a community dedicated to the pursuit of onchain reality, composed of enthusiasts passionate about emerging technologies.




            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:w-[calc(100%+5rem)] md:grid-cols-2 md:gap-5">
            <ManifestoCard />
            <StatusCard />
          </div>
        </div>

        <div className="relative w-full md:mt-2 md:w-[min(38rem,42%)] md:flex-none">
          <div className="panel panel-hover-motion tv-card ml-auto w-full max-w-[48rem] p-6 md:p-8">
            <span aria-hidden className="panel-glitch-overlay" />
            <div className="panel-content">
              <div className="tv-screen relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-black">
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
                <div className="tv-logo relative text-center">
                  <div className="mb-2 font-mono text-6xl text-green-400 md:text-7xl">DFARCHON</div>
                  <div className="font-mono text-xs text-green-400">
                    NICE TO MEET YOU
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs font-bold uppercase">
                EST. 2021
              </p>
            </div>
          </div>

          {/* <div className="absolute -bottom-8 -left-10 bg-black p-2 font-mono text-[10px] leading-tight text-green-400">
            // zkSNARK_FOG_ACTIVE...
            <br />
            // ONCHAIN_REALITY: ONLINE...
            <br />
            // COMMUNITY_ROUNDS: 10
          </div> */}
        </div>
      </div>
    </section>
  );
}

function ManifestoCard() {
  return (
    <div className="hero-info-card hero-info-card-green panel-hover-motion min-h-[8.5rem] p-4 md:min-h-[10rem]">
      <span aria-hidden className="panel-glitch-overlay" />
      <div className="panel-content relative z-10">
        <h3 className="mb-2 border-b-2 border-black font-bold">OUR VISION</h3>
        <p className="text-sm">
          We hope to build self-sovereign digital worlds.
        </p>
        <p className="text-sm">
          We value decentralization and privacy.
        </p>
      </div>
    </div>
  );
}

function StatusCard() {
  return (
    <div className="hero-info-card panel-hover-motion min-h-[8.5rem] p-4 md:min-h-[10rem]">
      <span aria-hidden className="panel-glitch-overlay" />
      <div className="panel-content relative z-10">
        <h3 className="mb-2 border-b-2 border-black font-bold">
          ACTIVE SINCE 2021
        </h3>
        <ul className="space-y-1 text-sm">
          <li>10 Dark Forest community rounds hosted</li>
          <li>Active in fully onchain gaming ecosystem </li>
          <li>Track the latest cutting-edge technologies </li>
        </ul>
      </div>
    </div>
  );
}
