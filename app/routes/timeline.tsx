import type { Route } from "./+types/timeline";
import SiteChrome from "../components/SiteChrome";
import Timeline from "../components/Timeline";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon | Timeline" },
    { name: "description", content: "DFArchon development timeline" },
  ];
}

export default function TimelinePage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-5xl py-12">
      <Timeline />
    </SiteChrome>
  );
}
