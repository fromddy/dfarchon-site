import type { Route } from "./+types/writings";

import SiteChrome from "../components/SiteChrome";
import Writings from "../components/Writings";
import { siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: siteContent.pageMeta.writings.title },
    { name: "description", content: siteContent.pageMeta.writings.description },
  ];
}

export default function WritingsPage() {
  return (
    <SiteChrome mainClassName="mx-auto max-w-6xl py-12">
      <Writings />
    </SiteChrome>
  );
}
