import type { ReactNode } from "react";

import EyeTracker from "./EyeTracker";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScanlineOverlay from "./ScanlineOverlay";

interface SiteChromeProps {
  children: ReactNode;
  mainClassName?: string;
}

export default function SiteChrome({
  children,
  mainClassName = "mx-auto max-w-7xl space-y-32",
}: SiteChromeProps) {
  return (
    <div className="p-4 md:p-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className={mainClassName}>{children}</main>

      <Footer />

      <a
        href="https://dfpunk.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="green-panel fixed right-6 bottom-6 z-50 inline-flex items-center justify-center px-4 py-2 text-sm leading-none font-bold uppercase transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
      >
        PLAY DFPUNK
      </a>
    </div>
  );
}
