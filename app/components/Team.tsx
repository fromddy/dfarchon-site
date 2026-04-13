import { teamContent } from "../content/team";

export default function Team() {
  return (
    <section id="team">
      <h2 className="manga-text mb-4 text-6xl">{teamContent.title}</h2>
      <p className="mb-12 text-sm text-gray-400">{teamContent.summary}</p>
      <p className="-mt-9 mb-12 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
        {teamContent.note}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
        {teamContent.members.map((member) => (
          <div
            key={member.name}
            className="panel team-card group relative z-[60] flex min-h-[21rem] flex-col p-4 md:min-h-[22rem]"
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
