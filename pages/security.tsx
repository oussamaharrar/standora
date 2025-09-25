import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — Standora</title>
        <meta name="description" content="Standora’s security practices covering encryption, RBAC, logging and incident response." />
        <meta property="og:title" content="Standora Security" />
        <meta property="og:description" content="Discover the controls Standora uses for encryption, RBAC, immutable logs and supply-chain security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.ai/security" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Standora Security" />
        <meta name="twitter:description" content="Read about Standora’s security posture, from encryption and RBAC to incident response." />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold">Security</h1>
          <ul className="mt-6 text-white/70 list-disc pl-5 space-y-2">
            <li>Encryption in transit; environment secrets in a credential vault.</li>
            <li>Role-based access control; least-privilege and regular key rotation.</li>
            <li>Immutable logs, anomaly detection, and incident playbooks.</li>
            <li>Dependency scanning and SBOM tracking for supply-chain security.</li>
          </ul>
          <p className="mt-6 text-white/60">Standora is a software platform, not a broker or advisor.</p>
          <p className="mt-4 text-xs text-white/50">For disclosures, contact <a href="mailto:support@standora.co.uk">support@standora.co.uk</a>.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
