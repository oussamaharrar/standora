export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.15)] py-10">
      <div className="container flex flex-col gap-6">
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
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-white/60">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/security" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}
