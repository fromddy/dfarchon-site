import { siteContent } from "../content/site";

export default function HeroSection() {
  return (
    <section id="vision" className="relative">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-2">
        <div className="w-full md:min-w-0 md:flex-1">
          <h1 className="manga-text mb-8 text-7xl md:text-9xl">
            {siteContent.hero.titleLines[0]}
            <br />
            {siteContent.hero.titleLines[1]}
            <br />
            <span className="text-pink-500">
              {siteContent.hero.titleLines[2]}
            </span>
          </h1>

          <div className="bubble mb-8 max-w-2xl">
            <p className="text-lg font-bold text-black">
              {siteContent.brand.intro}
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
                  <div className="mb-2 font-mono text-6xl text-green-400 md:text-7xl">
                    {siteContent.brand.displayName}
                  </div>
                  <div className="font-mono text-xs text-green-400">
                    {siteContent.hero.tvMessage}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs font-bold uppercase">
                EST. {siteContent.brand.foundedYear}
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
        <h3 className="mb-2 border-b-2 border-black font-bold">
          {siteContent.hero.visionTitle}
        </h3>
        {siteContent.hero.visionStatements.map((statement) => (
          <p key={statement} className="text-sm">
            {statement}
          </p>
        ))}
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
          {siteContent.hero.statusTitle}
        </h3>
        <ul className="space-y-1 text-sm">
          {siteContent.hero.statusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
