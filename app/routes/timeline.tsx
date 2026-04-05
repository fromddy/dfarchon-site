import type { Route } from "./+types/timeline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScanlineOverlay from "../components/ScanlineOverlay";
import EyeTracker from "../components/EyeTracker";
import Timeline from "../components/Timeline";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DFArchon — Timeline" },
    { name: "description", content: "DFArchon development timeline" },
  ];
}

export default function TimelinePage() {
  return (
    <div className="p-4 md:p-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className="max-w-5xl mx-auto py-12">
        <Timeline />
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
