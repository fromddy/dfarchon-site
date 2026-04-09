import type { Route } from "./+types/writings";

import SiteChrome from "../components/SiteChrome";
import Writings from "../components/Writings";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon | Writings" },
    { name: "description", content: "Writings and essays from DFArchon" },
  ];
}

export default function WritingsPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-6xl py-12">
      <Writings />
    </SiteChrome>
  );
}
