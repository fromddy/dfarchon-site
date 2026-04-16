import type { Route } from "./+types/projects";

import Projects from "../components/Projects";
import SiteChrome from "../components/SiteChrome";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.projects);
}

export default function ProjectsPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Projects />
    </SiteChrome>
  );
}
