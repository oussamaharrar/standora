import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — Standora</title>
        <meta name="description" content="Standora’s security practices covering encryption, RBAC, logging and incident response." />
        <meta property="og:title" content="Standora Security" />
        <meta property="og:description" content="Discover the controls Standora uses for encryption, RBAC, immutable logs and supply-chain security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.co.uk/security" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Standora Security" />
        <meta name="twitter:description" content="Read about Standora’s security posture, from encryption and RBAC to incident response." />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <SkipLink />
        <Nav />
        <main id="main" className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 md:mb-6">Security</h1>
          <ul className="mt-6 text-white/70 list-disc pl-5 space-y-2">
            <li>Encryption in transit; environment secrets in a credential vault.</li>
            <li>Role-based access control; least-privilege and regular key rotation.</li>
            <li>Immutable logs, anomaly detection, and incident playbooks.</li>
            <li>Dependency scanning and SBOM tracking for supply-chain security.</li>
          </ul>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Responsible Disclosure</h2>
            <p className="mt-3 text-white/70">
              If you believe you’ve found a vulnerability, please email <a href="mailto:security@standora.co.uk" className="underline">security@standora.co.uk</a>{" "}
              with a concise description and reproduction steps. Do not publicly disclose before we confirm a fix. We aim to acknowledge within 48 hours and provide
              status updates until resolution. Thank you for helping us keep users safe.
            </p>
          </section>
          <p className="mt-10 text-white/60">Standora is a software platform, not a broker or advisor.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
