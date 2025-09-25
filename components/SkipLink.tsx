export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-black px-3 py-2 rounded"
    >
      Skip to content
    </a>
  );
}
