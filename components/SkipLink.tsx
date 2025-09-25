export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 bg-white text-black px-3 py-2 rounded shadow-lg"
    >
      Skip to content
    </a>
  );
}
