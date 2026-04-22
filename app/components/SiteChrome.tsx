import type { CSSProperties, ReactNode } from "react";

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
  mainClassName = "mx-auto max-w-7xl space-y-20 md:space-y-32",
}: SiteChromeProps) {
  return (
    <div className="p-3 pb-24 sm:p-4 sm:pb-20 md:p-8 md:pb-8">
      <ScanlineOverlay />
      <EyeTracker />
      <Navbar />

      <main className={mainClassName}>{children}</main>

      <Footer />

      <a
        href="https://dfpunk.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="green-panel fixed right-3 bottom-3 z-[200] inline-flex items-center justify-center px-3 py-2 text-xs leading-none font-bold uppercase transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] sm:right-4 sm:bottom-4 sm:px-4 sm:text-sm md:right-6 md:bottom-6"
        style={{ "--panel-shadow-color": "var(--white)" } as CSSProperties}
      >
        PLAY DFPUNK
      </a>
    </div>
  );
}
