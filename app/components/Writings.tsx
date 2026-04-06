import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

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

function ArticleModal({
  entry,
  onClose,
}: {
  entry: WritingEntry;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-[95vw] h-[90vh] border-4 border-black bg-white">
        <div className="flex items-center justify-between px-4 py-2 bg-black text-white border-b-4 border-black">
          <div className="font-bold text-sm truncate mr-4">{entry.title}</div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 text-xs font-mono hover:underline"
            >
              OPEN_EXTERNAL
            </a>
            <button
              onClick={onClose}
              className="text-white font-bold text-xl leading-none hover:text-pink-500 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>

        <iframe
          src={entry.url}
          className="w-full border-0"
          style={{ height: "calc(90vh - 52px)" }}
          title={entry.title}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>,
    document.body
  );
}

export default function Writings() {
  const [activeEntry, setActiveEntry] = useState<WritingEntry | null>(null);

  const openEntry = useCallback((entry: WritingEntry) => {
    setActiveEntry((prev) => (prev ? prev : entry));
  }, []);

  return (
    <section
      id="writings"
      className="bg-pink-500 p-8 border-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black italic">
        ONCHAIN
      </div>

      <h2
        className="font-bold text-5xl mb-8 uppercase"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "black",
          textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
        }}
      >
        WRITINGS
      </h2>

      <div className="space-y-4 relative z-10">
        {WRITINGS.map((entry) => (
          <button
            key={entry.number}
            onClick={() => openEntry(entry)}
            className="bg-white text-black p-4 border-4 border-black flex justify-between items-center hover:bg-black hover:text-white transition-colors cursor-pointer group w-full text-left"
          >
            <div className="font-bold">
              {entry.number} {entry.title}
            </div>
            <div className="text-xs font-mono group-hover:text-green-400">
              {entry.date}
            </div>
          </button>
        ))}
      </div>

      {activeEntry && (
        <ArticleModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />
      )}
    </section>
  );
}
