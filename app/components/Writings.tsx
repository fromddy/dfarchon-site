import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { writingsContent, type WritingEntry } from "../content/writings";

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
      <div className="relative h-[92vh] w-[calc(100vw-1rem)] border-4 border-black bg-white sm:h-[90vh] sm:w-[95vw]">
        <div className="flex items-center justify-between gap-3 border-b-4 border-black bg-black px-3 py-2 text-white sm:px-4">
          <div className="mr-4 truncate text-sm font-bold">{entry.title}</div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-green-400 hover:underline"
            >
              OPEN_EXTERNAL
            </a>
            <button
              onClick={onClose}
              className="text-xl leading-none font-bold text-white transition-colors hover:text-pink-500"
            >
              &times;
            </button>
          </div>
        </div>

        <iframe
          src={entry.url}
          className="w-full border-0"
          style={{ height: "calc(100% - 52px)" }}
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
      className="relative mx-auto max-w-[24rem] overflow-hidden border-4 border-black bg-pink-500 p-4 sm:max-w-none sm:p-6 md:p-8"
    >
      <div className="absolute top-0 right-0 p-3 text-5xl font-black italic opacity-10 sm:p-4 sm:text-7xl md:text-8xl">
        ONCHAIN
      </div>

      <h2
        className="mb-8 text-3xl font-bold uppercase sm:text-4xl md:text-5xl"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "black",
          textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
        }}
      >
        {writingsContent.title}
      </h2>

      <div className="relative z-10 space-y-4">
        {writingsContent.entries.map((entry) => (
          <button
            key={entry.number}
            onClick={() => openEntry(entry)}
            className="group mx-auto flex w-full max-w-[22rem] cursor-pointer flex-col items-start gap-2 border-4 border-black bg-white p-4 text-left text-black transition-colors hover:bg-black hover:text-white sm:max-w-none sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="font-bold">
              {entry.number} {entry.title}
            </div>
            <div className="font-mono text-xs group-hover:text-green-400">
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
