import { Link } from "react-router";

const NAV_ITEMS = [
  { href: "/#vision", label: "01_VISION" },
  { href: "/#tech", label: "02_STACK" },
  { href: "/#projects", label: "03_PROJECTS" },
  { href: "/#team", label: "04_NODES" },
  { href: "/timeline", label: "05_TIMELINE" },
];

export default function Navbar() {
  return (
    <nav className="relative z-10 mb-12 flex flex-wrap gap-2">
      <Link
        to="/"
        prefetch="intent"
        className="pink-panel border-4 border-black p-2 text-xl font-bold uppercase italic no-underline"
      >
        DFArchon
      </Link>

      {NAV_ITEMS.map((item) =>
        item.href === "/timeline" ? (
          <Link
            key={item.href}
            to={item.href}
            prefetch="intent"
            className="nav-link"
          >
            {item.label}
          </Link>
        ) : (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
