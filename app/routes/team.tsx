import type { Route } from "./+types/team";

import SiteChrome from "../components/SiteChrome";
import Team from "../components/Team";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon | Team" },
    { name: "description", content: "Meet the DFArchon team" },
  ];
}

export default function TeamPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-7xl py-12">
      <Team />
    </SiteChrome>
  );
}
