import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { href: "/", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/team", label: "TEAM" },
  { href: "/writings", label: "WRITINGS" },
  { href: "/timeline", label: "TIMELINE" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="relative z-10 mb-12 flex flex-wrap items-center gap-x-4 gap-y-3">
      <Link
        to="/"
        prefetch="intent"
        className="brand-link mr-3 inline-flex items-center justify-center px-5 py-3 text-xl leading-none font-bold uppercase italic no-underline"
      >
        <span className="brand-link-label">DFArchon</span>
      </Link>

      <div className="flex flex-wrap gap-x-3 gap-y-3">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              prefetch="intent"
              className={`nav-link w-36 ${isActive ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
