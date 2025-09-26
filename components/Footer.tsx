export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.15)] py-10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500" />
            <span className="text-sm text-white/70">© {new Date().getFullYear()} Standora. All rights reserved.</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="/sample-report.pdf" className="btn btn-ghost text-sm no-underline" target="_blank" rel="noopener">
              Download sample report (PDF)
            </a>
            <a href="/contact" className="btn btn-primary text-sm no-underline">
              Get a live demo
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 text-sm text-white/70">
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Explore</h3>
            <nav className="flex flex-col gap-2">
              <a href="/about" className="hover:text-white text-white/70">About</a>
              <a href="/contact" className="hover:text-white text-white/70">Contact</a>
              <a href="/developers" className="hover:text-white text-white/70">Developers</a>
              <a href="/#faq" className="hover:text-white text-white/70">Technical FAQ</a>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Legal</h3>
            <nav className="flex flex-col gap-2">
              <a href="/privacy" className="hover:text-white text-white/70">Privacy</a>
              <a href="/terms" className="hover:text-white text-white/70">Terms</a>
              <a href="/security" className="hover:text-white text-white/70">Security</a>
              <a href="/last-update" className="hover:text-white text-white/70">Last Update</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
