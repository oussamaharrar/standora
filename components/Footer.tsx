export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.15)] py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500" />
          <span className="text-sm text-white/70">© {new Date().getFullYear()} Standora. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-white/60">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/security" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}
