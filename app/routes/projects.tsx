import type { Route } from "./+types/projects";

import Projects from "../components/Projects";
import SiteChrome from "../components/SiteChrome";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon | Projects" },
    { name: "description", content: "Projects built by DFArchon" },
  ];
}

export default function ProjectsPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Projects />
    </SiteChrome>
  );
}
