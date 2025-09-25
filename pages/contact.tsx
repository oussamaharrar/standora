import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useState } from "react";
import { Send, Mail, Briefcase, BarChart3 } from "lucide-react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get("email") || ""),
      useCase: String(formData.get("useCase") || ""),
      deskAum: String(formData.get("deskAum") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const captcha = (window as any)?.grecaptcha;
      if (!captcha || !SITE_KEY) {
        throw new Error("reCAPTCHA not loaded");
      }

      await new Promise<void>((resolve) => captcha.ready(() => resolve()));
      const token = await captcha.execute(SITE_KEY, { action: "lead" });

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, token }),
      });

      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("ok");
      form.reset();
    } catch (error: any) {
      setStatus("err");
      setErrMsg(error?.message || "Something went wrong");
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Standora</title>
        <meta
          name="description"
          content="Request a live demo, discuss integration timelines, or coordinate enterprise onboarding for Standora."
        />
        <meta property="og:title" content="Contact Standora" />
        <meta
          property="og:description"
          content="Connect with the Standora team to schedule a live demo and review execution, risk, and compliance requirements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.ai/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Standora" />
        <meta
          name="twitter:description"
          content="Speak with Standora about RL LLM execution, risk controls, and deployment timelines."
        />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>

      {SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="afterInteractive" />
      )}

      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-3xl space-y-6">
          <section>
            <h1 className="text-4xl font-bold">Contact us</h1>
            <p className="mt-3 text-white/70">
              For partnerships, enterprise pilots or integration reviews, share a few details and we will schedule a session.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="card p-6 space-y-4" aria-label="Request a Standora demo">
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Work email
              <input
                type="email"
                name="email"
                required
                className="rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="you@fund.com"
                aria-required="true"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Primary use-case
              <div className="relative">
                <input
                  name="useCase"
                  required
                  className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 pr-12 text-base outline-none focus:ring-2 focus:ring-emerald-400/60"
                  placeholder="Market-making, hedging, execution ops…"
                  aria-required="true"
                />
                <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" aria-hidden />
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Desk / AUM context
              <div className="relative">
                <input
                  name="deskAum"
                  required
                  className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 pr-12 text-base outline-none focus:ring-2 focus:ring-emerald-400/60"
                  placeholder="e.g. Crypto desk · $120M AUM"
                  aria-required="true"
                />
                <BarChart3 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" aria-hidden />
              </div>
            </label>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 text-base outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Timeline, venues, regions, risk considerations…"
                aria-required="true"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : <><span>Send message</span> <Send className="h-4 w-4" /></>}
            </button>

            {status === "ok" && <p className="text-sm text-emerald-400">Thanks! We will follow up shortly.</p>}
            {status === "err" && <p className="text-sm text-red-400">Submission failed: {errMsg}</p>}

            <p className="text-xs text-white/50">
              Protected by reCAPTCHA. Standora is a software platform, not a broker or advisor.
            </p>
          </form>

          <div className="text-sm text-white/70">
            <p>Prefer email?</p>
            <a href="mailto:support@standora.co.uk" className="mt-1 inline-flex items-center gap-2 underline">
              <Mail className="h-4 w-4" aria-hidden /> support@standora.co.uk
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
