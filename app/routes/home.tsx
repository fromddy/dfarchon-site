import type { Route } from "./+types/home";
import HeroSection from "../components/HeroSection";
import SiteChrome from "../components/SiteChrome";
import { getPageMetaDescriptors, siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return getPageMetaDescriptors(siteContent.pageMeta.home);
}

export default function Home() {
  return (
    <SiteChrome>
      <HeroSection />
    </SiteChrome>
  );
}
