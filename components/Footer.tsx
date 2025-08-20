export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between">
        <span className="text-sm text-white/70">© {new Date().getFullYear()} Standora</span>
      </div>
    </footer>
  );
}