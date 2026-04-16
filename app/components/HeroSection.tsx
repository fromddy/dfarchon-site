import { siteContent } from "../content/site";

export default function HeroSection() {
  return (
    <section id="vision" className="relative">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-4">
        <div className="w-full md:min-w-0 md:flex-1">
          <h1 className="manga-text mb-6 text-5xl sm:text-6xl md:mb-8 md:text-8xl lg:text-9xl">
            {siteContent.hero.titleLines[0]}
            <br />
            {siteContent.hero.titleLines[1]}
            <br />
            <span className="text-pink-500">
              {siteContent.hero.titleLines[2]}
            </span>
          </h1>

          <div className="bubble mb-8 max-w-2xl">
            <p className="text-base font-bold text-black sm:text-lg">
              {siteContent.brand.intro}
            </p>
          </div>

          <div className="grid justify-items-center grid-cols-1 gap-4 lg:grid-cols-2 lg:justify-items-stretch lg:gap-5">
            <ManifestoCard />
            <StatusCard />
          </div>
        </div>

        <div className="relative flex w-full justify-center md:mt-2 md:block md:w-[min(38rem,42%)] md:flex-none">
          <div className="panel panel-hover-motion tv-card w-full max-w-[22rem] p-4 sm:max-w-[26rem] sm:p-6 md:ml-auto md:max-w-[48rem] md:p-8">
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
                  <div className="mb-2 font-mono text-4xl text-green-400 sm:text-5xl md:text-7xl">
                    {siteContent.brand.displayName}
                  </div>
                  <div className="font-mono text-[10px] text-green-400 sm:text-xs">
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
    <div className="hero-info-card hero-info-card-green panel-hover-motion w-full max-w-[22rem] p-4 lg:max-w-none lg:min-h-[10rem]">
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
    <div className="hero-info-card panel-hover-motion w-full max-w-[22rem] p-4 lg:max-w-none lg:min-h-[10rem]">
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
