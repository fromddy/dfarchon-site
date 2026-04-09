import type { Route } from "./+types/timeline";
import SiteChrome from "../components/SiteChrome";
import Timeline from "../components/Timeline";
import { siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: siteContent.pageMeta.timeline.title },
    { name: "description", content: siteContent.pageMeta.timeline.description },
  ];
}

export default function TimelinePage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-5xl py-12">
      <Timeline />
    </SiteChrome>
  );
}
