import type { Route } from "./+types/team";

import SiteChrome from "../components/SiteChrome";
import Team from "../components/Team";
import { siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: siteContent.pageMeta.team.title },
    { name: "description", content: siteContent.pageMeta.team.description },
  ];
}

export default function TeamPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Team />
    </SiteChrome>
  );
}
