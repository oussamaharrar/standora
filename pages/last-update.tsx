import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { CHANGELOG } from "@/data/changelog";

export default function LastUpdate() {
  return (
    <>
      <Head>
        <title>Last Update — Standora</title>
        <meta name="description" content="High-level, non-sensitive highlights from Standora’s internal releases." />
        <meta property="og:title" content="Standora Last Update" />
        <meta
          property="og:description"
          content="Track Standora’s platform updates across execution, risk, sandbox gateways and panel tooling."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.co.uk/last-update" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Standora Last Update" />
        <meta
          name="twitter:description"
          content="Recent Standora milestones covering execution realism, sandbox gateways and orchestration wiring."
        />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <SkipLink />
        <Nav />
        <main id="main" className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 md:mb-6">Last Update</h1>
          <p className="mt-2 text-white/70">High-level, non-sensitive highlights from our internal releases.</p>
          <div className="mt-8 space-y-6">
            {CHANGELOG.map((c, i) => (
              <div key={i} className="card p-6">
                <div className="text-sm text-white/50">{c.date}</div>
                <h3 className="mt-1 font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.what}</p>
                <p className="mt-1 text-white/50 text-sm">{c.why}</p>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
