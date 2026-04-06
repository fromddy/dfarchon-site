import type { Route } from "./+types/timeline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScanlineOverlay from "../components/ScanlineOverlay";
import EyeTracker from "../components/EyeTracker";
import Timeline from "../components/Timeline";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "DFArchon" },
    { name: "description", content: "DFArchon development timeline" },
  ];
}

export default function TimelinePage() {
  return (
    <div className="p-4 md:p-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className="mx-auto max-w-5xl py-12">
        <Timeline />
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
