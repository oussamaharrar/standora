import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head><title>About — Standora</title><link rel="icon" href="/standora-icon.ico" /></Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold">About KAWA TEAM LTD & Standora</h1>
          <p className="mt-4 text-white/70">
            KAWA TEAM LTD is a research-driven fintech based in London. We build autonomous <b>RL LLM agents</b> for high-frequency trading across crypto, FX, and global markets.
            Our mission is to engineer the world’s safest, fastest, and most adaptive AI trading agent—and make it accessible beyond a handful of funds.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">Our Story</h2>
          <p className="mt-3 text-white/70">
            Founded by a small team of quant engineers and AI researchers, Standora started as an experiment: can language‑model planning guide reinforcement‑learning policies
            under strict latency budgets? The prototype evolved into a production‑grade RL LLM stack with online learning, venue‑aware execution, and institutional risk controls.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">Goals</h2>
          <ul className="mt-3 text-white/70 list-disc pl-5 space-y-2">
            <li>Deliver sub‑10ms decision loops and predictable latency distributions.</li>
            <li>Expand to cross‑asset coverage with modular policies per venue and timeframe.</li>
            <li>Lead with compliance and safety: auditable signals and reproducible backtests.</li>
            <li>Advance research on microstructure‑aware reward shaping and robust online learning.</li>
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}
