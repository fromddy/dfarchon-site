import type { Route } from "./+types/team";

import SiteChrome from "../components/SiteChrome";
import Team from "../components/Team";
import { teamContent } from "../content/team";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.team);
}

function shuffleMembers<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export function loader() {
  return {
    members: shuffleMembers(teamContent.members),
  };
}

export default function TeamPage({ loaderData }: Route.ComponentProps) {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Team members={loaderData.members} />
    </SiteChrome>
  );
}
