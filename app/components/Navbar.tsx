import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { href: "/", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/team", label: "TEAM" },
  // { href: "/writings", label: "WRITINGS" },
  { href: "/timeline", label: "TIMELINE" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="relative z-10 mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-3">
      <Link
        to="/"
        prefetch="intent"
        className="brand-link inline-flex w-full items-center justify-center px-4 py-3 text-lg leading-none font-bold uppercase italic no-underline sm:mr-3 sm:w-auto sm:px-5 sm:text-xl"
      >
        <span className="brand-link-label">DFArchon</span>
      </Link>

      <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              prefetch="intent"
              className={`nav-link w-full text-sm sm:w-36 sm:text-base ${isActive ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
