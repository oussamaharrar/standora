import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Standora</title>
        <meta name="description" content="Standora terms covering permitted usage, accounts, liability and risk disclosures." />
        <meta property="og:title" content="Standora Terms of Service" />
        <meta property="og:description" content="Understand Standora’s usage policies, compliance responsibilities and liability limits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.co.uk/terms" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Standora Terms of Service" />
        <meta name="twitter:description" content="Review how Standora may be used, responsibilities for accounts and risk disclosures." />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <SkipLink />
        <Nav />
        <main id="main" className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-white/70">These Terms govern your use of Standora. By using the platform, you agree to these Terms.</p>
          <h2 className="mt-10 text-2xl font-semibold">Use of the Service</h2>
          <ul className="mt-2 text-white/70 list-disc pl-5 space-y-1">
            <li>Standora is for research and execution; no investment advice.</li>
            <li>You are responsible for accounts, keys, compliance, and risk policies.</li>
            <li>No guarantees of performance; markets involve risk of loss.</li>
          </ul>
          <h2 className="mt-10 text-2xl font-semibold">Accounts & Access</h2>
          <ul className="mt-2 text-white/70 list-disc pl-5 space-y-1">
            <li>Maintain accurate registration information and secure your credentials.</li>
            <li>Do not misuse the service or attempt unauthorized access.</li>
          </ul>
          <h2 className="mt-10 text-2xl font-semibold">Liability</h2>
          <p className="mt-2 text-white/70">To the maximum extent permitted by law, Standora is not liable for indirect or consequential damages.</p>
          <p className="mt-8 text-white/60">Standora is a software platform, not a broker or advisor.</p>
          <p className="mt-6 text-xs text-white/50">Template — not legal advice. Please consult counsel.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
