const NAV_ITEMS = [
  { href: "/#vision", label: "01_VISION" },
  { href: "/#tech", label: "02_STACK" },
  { href: "/#projects", label: "03_PROJECTS" },
  { href: "/#team", label: "04_NODES" },
  { href: "/timeline", label: "05_TIMELINE" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-2 mb-12 relative z-10">
      <a href="/" className="pink-panel p-2 font-bold text-xl uppercase italic border-4 border-black no-underline">
        DFArchon
      </a>

      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href} className="nav-link">
          {item.label}
        </a>
      ))}

    </nav>
  );
}
