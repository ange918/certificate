import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SearchDialog } from "./SearchDialog";

const links = [
  { to: "/gouvernement", label: "Exécutif" },
  { to: "/institutions", label: "Institutions" },
  { to: "/demarches", label: "Démarches" },
  { to: "/signaler", label: "Signaler" },
];

export function Shell() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA");
      if (event.key === "/" && !typing) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const node = document.getElementById(location.hash.slice(1));
    node?.scrollIntoView({ block: "start" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3">
        Aller au contenu
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="flex items-center gap-4 px-4 py-3 md:px-10">
          <span className="flex h-8 w-4 shrink-0" aria-hidden="true">
            <span className="w-2 bg-palm" />
            <span className="flex w-2 flex-col">
              <span className="h-4 bg-gold" />
              <span className="h-4 bg-signal" />
            </span>
          </span>
          <NavLink to="/" className="font-display text-[22px] leading-none tracking-[-0.03em] text-deep">
            Bénin
          </NavLink>
          <nav className="ml-6 hidden items-center gap-6 md:flex" aria-label="Sections">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[15px] font-medium ${isActive ? "text-deep underline decoration-palm decoration-2 underline-offset-8" : "text-muted"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="ml-auto inline-flex min-h-11 items-center gap-2 border border-line bg-white px-4 text-[15px] font-medium text-deep transition-colors duration-200 hover:bg-sand"
            onClick={() => setOpen(true)}
          >
            Rechercher
          </button>
        </div>
      </header>

      <main id="contenu" className="pb-24 md:pb-0">
        <Outlet />
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-line bg-paper md:hidden"
        aria-label="Sections"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex min-h-16 items-center justify-center px-1 text-center text-[14px] font-semibold ${isActive ? "bg-deep text-white" : "text-deep"}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <SearchDialog open={open} query={query} onQuery={setQuery} onClose={() => setOpen(false)} />
    </div>
  );
}
