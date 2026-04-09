import type { Route } from "./+types/projects";

import Projects from "../components/Projects";
import SiteChrome from "../components/SiteChrome";
import { siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: siteContent.pageMeta.projects.title },
    { name: "description", content: siteContent.pageMeta.projects.description },
  ];
}

export default function ProjectsPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Projects />
    </SiteChrome>
  );
}
