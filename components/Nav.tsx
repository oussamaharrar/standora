import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-[rgba(255,255,255,0.15)]">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500" />
          <span className="font-semibold tracking-wide">Standora</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="/#features" className="hover:text-white">Features</a>
          <a href="/#how" className="hover:text-white">How it works</a>
          <a href="/#case-studies" className="hover:text-white">Case Studies</a>
          <a href="/#clients" className="hover:text-white">Who We Serve</a>
          <a href="/#infrastructure" className="hover:text-white">Infrastructure</a>
          <a href="/#compliance" className="hover:text-white">Compliance</a>
          <a href="/#faq" className="hover:text-white">FAQ</a>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <Link href="/contact" className="group btn btn-ghost text-sm no-underline">
          Request demo <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}
