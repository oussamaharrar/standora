import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_LINKS.map((link) => link.id));

  const handleNavigate = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0b0e14]/75 supports-[backdrop-filter]:bg-[#0b0e14]/60">
      <div className="container h-[var(--header-h)] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0" onClick={handleNavigate}>
          <div className="h-6 w-6 rounded-md bg-teal-500/80" aria-hidden />
          <span className="font-semibold">Standora</span>
        </Link>

        <div className="nav-scroller hidden lg:flex items-center gap-x-4 md:gap-x-6 min-w-0 text-sm">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link px-2 md:px-3 no-underline ${activeId === link.id ? "active" : ""}`.trim()}
            >
              {link.label}
            </a>
          ))}
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
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-[#0b0e14]">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link py-2 no-underline"
                onClick={handleNavigate}
              >
                {link.label}
              </a>
            ))}
            <Link href="/developers" className="nav-link py-2 no-underline" onClick={handleNavigate}>
              Developers
            </Link>
            <Link href="/last-update" className="nav-link py-2 no-underline" onClick={handleNavigate}>
              Last Update
            </Link>
            <Link href="/about" className="nav-link py-2 no-underline" onClick={handleNavigate}>
              About
            </Link>
            <Link href="/contact" className="nav-link py-2 no-underline" onClick={handleNavigate}>
              Contact
            </Link>
            <div className="pt-2 flex gap-2">
              <a
                href="/sample-report.pdf"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost btn-compact grow text-center no-underline"
                onClick={handleNavigate}
              >
                Sample report
              </a>
              <Link
                href="/contact"
                className="btn btn-primary btn-compact grow text-center no-underline"
                onClick={handleNavigate}
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
