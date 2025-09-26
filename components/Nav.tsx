import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useScrollSpy } from "@/lib/useScrollSpy";

const SECTION_LINKS = [
  { id: "features", label: "Features" },
  { id: "how", label: "How It Works" },
  { id: "case-studies", label: "Case Studies" },
  { id: "clients", label: "Who We Serve" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "compliance", label: "Compliance" },
  { id: "faq", label: "Technical FAQ" },
];

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_LINKS.map((link) => link.id));
  const isHome = router.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0b0e14]/75 supports-[backdrop-filter]:bg-[#0b0e14]/60">
      <div className="container h-[var(--header-h)] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0 no-underline">
          <div className="h-6 w-6 rounded-md bg-teal-500/80" aria-hidden />
          <span className="font-semibold">Standora</span>
        </Link>

        <div className="nav-scroller hidden lg:flex items-center gap-x-4 md:gap-x-6 min-w-0 text-sm">
          {SECTION_LINKS.map((link) => {
            const href = isHome ? `#${link.id}` : `/#${link.id}`;

            return (
              <a
                key={link.id}
                href={href}
                className={`nav-link px-2 md:px-3 no-underline${activeId === link.id ? " active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
          <Link href="/developers" className="nav-link px-2 md:px-3 no-underline">
            Developers
          </Link>
          <Link href="/last-update" className="nav-link px-2 md:px-3 no-underline">
            Last Update
          </Link>
          <Link href="/about" className="nav-link px-2 md:px-3 no-underline">
            About
          </Link>
          <Link href="/contact" className="nav-link px-2 md:px-3 no-underline">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="/sample-report.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost btn-compact no-underline"
          >
            Download sample report (PDF)
          </a>
          <Link href="/contact" className="btn btn-primary btn-compact no-underline">
            Get a live demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b0e14]">
          <div className="px-4 py-3 flex flex-col gap-2">
            {SECTION_LINKS.map((link) => {
              const href = isHome ? `#${link.id}` : `/#${link.id}`;

              return (
                <a key={link.id} href={href} className="nav-link py-2" onClick={handleNavClick}>
                  {link.label}
                </a>
              );
            })}
            <Link href="/developers" className="nav-link py-2" onClick={handleNavClick}>
              Developers
            </Link>
            <Link href="/last-update" className="nav-link py-2" onClick={handleNavClick}>
              Last Update
            </Link>
            <Link href="/about" className="nav-link py-2" onClick={handleNavClick}>
              About
            </Link>
            <Link href="/contact" className="nav-link py-2" onClick={handleNavClick}>
              Contact
            </Link>
            <div className="pt-2 flex gap-2">
              <a
                href="/sample-report.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost btn-compact grow text-center"
                onClick={handleNavClick}
              >
                Sample report
              </a>
              <Link
                href="/contact"
                className="btn btn-primary btn-compact grow text-center"
                onClick={handleNavClick}
              >
                Get a live demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
