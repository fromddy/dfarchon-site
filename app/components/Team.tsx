import { teamContent, type TeamAccent } from "../content/team";

const accentClassMap: Record<TeamAccent, string> = {
  green: "green-panel",
  pink: "pink-panel",
  neutral: "panel",
};

export default function Team() {
  return (
    <section id="team">
      <h2 className="manga-text mb-4 text-6xl">{teamContent.title}</h2>
      <p className="mb-12 text-sm text-gray-400">{teamContent.summary}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {teamContent.members.map((member) => (
          <div key={member.name} className="panel group p-4">
            <div className="mb-3 flex h-24 items-center justify-center border-2 border-black bg-black">
              <span className="font-mono text-2xl font-bold text-green-400">
                {member.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div
              className={`${accentClassMap[member.accent]} mb-2 inline-block px-2 text-[10px] font-bold uppercase`}
            >
              {member.role}
            </div>
            <div className="mb-1 text-sm font-bold">{member.name}</div>
            <p className="text-[10px] opacity-60">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
