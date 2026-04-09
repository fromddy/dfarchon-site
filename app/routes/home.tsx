import type { Route } from "./+types/home";
import HeroSection from "../components/HeroSection";
import SiteChrome from "../components/SiteChrome";
import { siteContent } from "../content/site";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: siteContent.pageMeta.home.title },
    { name: "description", content: siteContent.pageMeta.home.description },
  ];
}

export default function Home() {
  return (
    <SiteChrome>
      <HeroSection />
    </SiteChrome>
  );
}
