export interface WritingEntry {
  number: string;
  title: string;
  date: string;
  url: string;
}

export const writingsContent = {
  title: "WRITINGS",
  entries: [
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
  ] satisfies WritingEntry[],
} as const;
