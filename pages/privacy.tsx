import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Head><title>Privacy Policy — Standora</title><link rel="icon" href="/standora-icon.ico" /></Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-white/70">
            This Privacy Policy explains how we collect, use, and protect information when you use Standora.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">Information We Collect</h2>
          <ul className="mt-2 text-white/70 list-disc pl-5 space-y-1">
            <li>Account info (name, email) for authentication and support.</li>
            <li>Operational logs (non-sensitive) for debugging, analytics, and security.</li>
            <li>No trading credentials stored without explicit opt‑in and scoping.</li>
          </ul>
          <h2 className="mt-10 text-2xl font-semibold">How We Use Information</h2>
          <ul className="mt-2 text-white/70 list-disc pl-5 space-y-1">
            <li>Operate and improve the platform; provide support.</li>
            <li>Analyze reliability and performance of models and infrastructure.</li>
            <li>Meet legal, security, and compliance requirements.</li>
          </ul>
          <h2 className="mt-10 text-2xl font-semibold">Retention & Security</h2>
          <p className="mt-2 text-white/70">We retain data only as needed and apply encryption in transit, access controls, and regular reviews.</p>
          <h2 className="mt-10 text-2xl font-semibold">Your Rights</h2>
          <p className="mt-2 text-white/70">You may request access, correction, or deletion of your personal information as permitted by law.</p>
          <p className="mt-6 text-xs text-white/50">Template — not legal advice. Please consult counsel.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
