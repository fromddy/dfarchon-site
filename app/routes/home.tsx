import type { Route } from "./+types/home";
import HeroSection from "../components/HeroSection";
import SiteChrome from "../components/SiteChrome";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon | About" },
    { name: "description", content: "About the DFArchon research collective" },
  ];
}

export default function Home() {
  return (
    <SiteChrome>
      <HeroSection />
    </SiteChrome>
  );
}
