import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Writings from "../components/Writings";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ScanlineOverlay from "../components/ScanlineOverlay";
import EyeTracker from "../components/EyeTracker";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon" },
    { name: "description", content: "DFArchon research collective" },
  ];
}

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className="mx-auto max-w-7xl space-y-32">
        <HeroSection />
        <Marquee />
        <TechStack />
        <Projects />
        <Writings />
        <Team />
      </main>

      <Footer />

      <a
        href="https://dfpunk.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="green-panel fixed right-6 bottom-6 z-50 px-4 py-2 text-sm font-bold uppercase transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
      >
        PLAY DFPUNK
      </a>
    </div>
  );
}
