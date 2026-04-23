import Marquee from "./Marquee";
import { siteContent } from "../content/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-8 border-black pt-8 pb-24 md:mt-32 md:pt-12">
      <div className="-mx-4 md:-mx-8">
        <Marquee />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="manga-text mb-4 text-4xl">
            {" "}
            {siteContent.brand.displayName}{" "}
          </h3>
          <p className="max-w-md text-sm">{siteContent.brand.intro}</p>
          <p className="mt-2 text-xs text-gray-500">
            Founded in {siteContent.brand.foundedYear}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {siteContent.footer.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <span className="nav-link-shape bg-black text-white">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="green-panel mx-auto w-full max-w-[22rem] p-5 sm:max-w-none sm:p-6 md:p-8">
          <h4 className="mb-4 font-bold uppercase">SYSTEM_LOG</h4>
          <div className="space-y-1 font-mono text-[10px] opacity-80">
            {siteContent.footer.systemLogs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
