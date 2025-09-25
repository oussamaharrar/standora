import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollSpy } from "@/lib/useScrollSpy";

const SECTION_LINKS = [
  { id: "features", label: "Features" },
  { id: "how", label: "How it works" },
  { id: "case-studies", label: "Case Studies" },
  { id: "clients", label: "Who We Serve" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "compliance", label: "Compliance" },
  { id: "faq", label: "Technical FAQ" },
];

export default function Nav() {
  const activeId = useScrollSpy(SECTION_LINKS.map((link) => link.id));

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-[rgba(255,255,255,0.15)]">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500" />
          <span className="font-semibold tracking-wide">Standora</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className={`nav-link no-underline ${activeId === link.id ? "active" : ""}`.trim()}
            >
              {link.label}
            </a>
          ))}
          <Link href="/developers" className="nav-link no-underline">
            Developers
          </Link>
          <Link href="/changelog" className="nav-link no-underline">
            Changelog
          </Link>
          <Link href="/about" className="nav-link no-underline">
            About
          </Link>
          <Link href="/contact" className="nav-link no-underline">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="/sample-report.pdf" className="btn btn-ghost text-sm no-underline" target="_blank" rel="noopener">
            Download sample report (PDF)
          </a>
          <Link href="/contact" className="group btn btn-primary text-sm no-underline">
            Get a live demo <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
      <div className="md:hidden border-t border-white/10">
        <div className="container py-3 flex flex-col sm:flex-row gap-3">
          <a href="/sample-report.pdf" className="btn btn-ghost text-sm no-underline" target="_blank" rel="noopener">
            Download sample report (PDF)
          </a>
          <Link href="/contact" className="btn btn-primary text-sm no-underline">
            Get a live demo
          </Link>
        </div>
      </div>
    </header>
  );
}
