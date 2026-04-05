interface WritingEntry {
  number: string;
  title: string;
  date: string;
  url: string;
}

const WRITINGS: WritingEntry[] = [
  {
    number: "01.",
    title: "Replay Time Machine",
    date: "NOV_2024",
    url: "https://paragraph.com/@dfarchon/replay-time-machine",
  },
  {
    number: "02.",
    title: "Function as Entity: A New Attempt at Porting Dark Forest to MUD",
    date: "AUG_2024",
    url: "https://paragraph.com/@dfarchon/function-as-entity-a-new-attempt-at-porting-dark-forest-to-mud",
  },
  {
    number: "03.",
    title: "Modifications to Fog of War in Dark Forest",
    date: "AUG_2024",
    url: "https://paragraph.com/@dfarchon/modifications-to-fog-of-war-in-dark-forest",
  },
];

export default function Writings() {
  return (
    <section
      id="writings"
      className="bg-pink-500 p-8 border-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black italic">
        ONCHAIN
      </div>

      <h2 className="font-bold text-5xl mb-8 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'black', textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>WRITINGS</h2>

      <div className="space-y-4 relative z-10">
        {WRITINGS.map((entry) => (
          <a
            key={entry.number}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-4 border-4 border-black flex justify-between items-center hover:bg-black hover:text-white transition-colors cursor-pointer group block"
          >
            <div className="font-bold">
              {entry.number} {entry.title}
            </div>
            <div className="text-xs font-mono group-hover:text-green-400">
              {entry.date}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
