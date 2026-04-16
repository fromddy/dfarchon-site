import { useMemo } from "react";

import { teamContent, type TeamMember } from "../content/team";

function createSeedFromText(value: string) {
  let seed = 0;

  for (let index = 0; index < value.length; index += 1) {
    seed = (seed * 31 + value.charCodeAt(index)) >>> 0;
  }

  return seed;
}

function createRng(seed: number) {
  let currentSeed = seed || 1;

  return () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) >>> 0;
    return currentSeed / 2 ** 32;
  };
}

function shuffleMembers(members: TeamMember[], seed: number) {
  const shuffled = [...members];
  const random = createRng(seed);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function Team() {
  const members = useMemo(() => {
    const dailySeed = createSeedFromText(new Date().toISOString().slice(0, 10));
    return shuffleMembers(teamContent.members, dailySeed);
  }, []);

  return (
    <section id="team">
      <h2 className="manga-text mb-4 text-4xl sm:text-5xl md:text-6xl">
        {teamContent.title}
      </h2>
      <p className="mb-12 text-sm text-gray-400">{teamContent.summary}</p>
      <p className="mb-12 max-w-3xl text-sm text-gray-300 md:-mt-9 md:text-base">
        {teamContent.note}
      </p>

      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch md:gap-8 lg:grid-cols-4 lg:gap-10">
        {members.map((member) => (
          <div
            key={member.name}
            className="panel team-card group relative z-[60] flex w-full max-w-[22rem] min-h-[19rem] flex-col p-4 sm:max-w-none md:min-h-[22rem]"
          >
            <div className="mb-3 flex h-24 shrink-0 items-center justify-center border-2 border-black bg-black px-3 text-center">
              <span className="font-mono text-xl font-bold text-green-400 uppercase break-words">
                {member.name}
              </span>
            </div>
            <div className="mb-2 text-sm font-bold">{member.name}</div>
            <p className="mb-4 flex-1 text-[11px] leading-snug opacity-80">
              {member.description}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-link team-social-link-flat"
              >
                GITHUB
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-link team-social-link-flat"
              >
                TWITTER
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
