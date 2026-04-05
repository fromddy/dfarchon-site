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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DFArchon — Onchain Reality" },
    { name: "description", content: "DFArchon research collective" },
  ];
}

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className="max-w-7xl mx-auto space-y-32">
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
        className="fixed bottom-6 right-6 z-50 green-panel px-4 py-2 font-bold uppercase text-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
      >
        PLAY DFPUNK
      </a>
    </div>
  );
}
