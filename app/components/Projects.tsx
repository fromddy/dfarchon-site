import {
  projectsContent,
  type ProjectEntry,
  type ProjectShowcase,
} from "../content/projects";

const showcaseThemeMap: Record<
  ProjectShowcase["theme"],
  { container: string; text: string; meta: string }
> = {
  dark: {
    container: "bg-black",
    text: "text-green-400",
    meta: "text-xs opacity-50",
  },
  purple: {
    container: "bg-purple-900",
    text: "text-white",
    meta: "text-xs opacity-70",
  },
  green: {
    container: "bg-green-500",
    text: "font-bold text-black",
    meta: "text-xs opacity-50",
  },
  red: {
    container: "bg-red-500",
    text: "font-bold text-white",
    meta: "text-xs opacity-75",
  },
  amber: {
    container: "bg-amber-400",
    text: "font-bold text-black",
    meta: "text-xs opacity-60",
  },
  cyan: {
    container: "bg-cyan-400",
    text: "font-bold text-black",
    meta: "text-xs opacity-60",
  },
  blue: {
    container: "bg-blue-500",
    text: "font-bold text-white",
    meta: "text-xs opacity-75",
  },
  lime: {
    container: "bg-lime-400",
    text: "font-bold text-black",
    meta: "text-xs opacity-60",
  },
  apollo: {
    container: "bg-yellow-300",
    text: "font-bold text-black",
    meta: "text-xs opacity-60",
  },
  zinc: {
    container: "bg-zinc-700",
    text: "text-white",
    meta: "text-xs opacity-70",
  },
  orange: {
    container: "bg-orange-400",
    text: "font-bold text-black",
    meta: "text-xs opacity-60",
  },
  pink: {
    container: "bg-pink-500",
    text: "font-bold text-white",
    meta: "text-xs opacity-70",
  },
};

const badgeToneMap = {
  green: "green-panel",
  pink: "pink-panel",
} as const;

function ProjectShowcaseCard({ project }: { project: ProjectEntry }) {
  const theme = showcaseThemeMap[project.showcase.theme];

  return (
    <div
      className={`relative flex h-48 items-center justify-center ${theme.container}`}
    >
      <div className={`text-center font-mono ${theme.text}`}>
        {project.showcase.icon ? (
          <div className="mb-1 text-3xl">{project.showcase.icon}</div>
        ) : null}
        <div
          className={`mb-1 ${project.showcase.icon ? "text-xs" : "text-2xl"}`}
        >
          {project.showcase.headline}
        </div>
        <div className="text-xs">{project.showcase.subheadline}</div>
        {project.showcase.meta ? (
          <div className={theme.meta}>{project.showcase.meta}</div>
        ) : null}
      </div>
      {project.showcase.badge ? (
        <div
          className={`${badgeToneMap[project.showcase.badge.tone]} absolute top-2 right-2 px-2 text-[10px] font-bold`}
        >
          {project.showcase.badge.label}
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="manga-text mb-10 text-4xl sm:text-5xl md:mb-12 md:text-6xl">
        {projectsContent.title}
      </h2>

      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-4">
        {projectsContent.items.map((project) => (
          <a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel group relative block w-full max-w-[22rem] overflow-hidden hover:z-[60] md:max-w-none"
          >
            <ProjectShowcaseCard project={project} />
            <div className="p-4">
              <h4 className="mb-1 text-xl font-bold">{project.title}</h4>
              <p className="mb-4 text-xs">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] opacity-50">{project.status}</span>
                <div className="flex h-8 w-8 items-center justify-center bg-black font-bold text-white transition-colors group-hover:bg-pink-500">
                  -&gt;
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
