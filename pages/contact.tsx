import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useState } from "react";
import { Send, Mail, Building2, Phone } from "lucide-react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeMR64rAAAAAO1RyX_wlJdQ93gZlowO_UvRAlYa";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("sending");
  setErrMsg("");

  const form = e.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  const payload = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    email: String(formData.get("email") || ""),
    subject: String(formData.get("subject") || ""),
    details: String(formData.get("details") || ""),
    phone: String(formData.get("phone") || ""),
    token: "",
  };

  try {
    // @ts-ignore
         const grecaptcha = (window as any).grecaptcha;
         if (!grecaptcha || !SITE_KEY) throw new Error("reCAPTCHA not loaded");

// Promise جاهزة لـ ready()
         await new Promise<void>((resolve) => grecaptcha.ready(() => resolve()));

// 1) توكن للسيرفر
         const tokenServer = await grecaptcha.execute(SITE_KEY, { action: "contact_server" });

// 2) توكن مستقل لـ Formspree
         await new Promise<void>((resolve) => grecaptcha.ready(() => resolve()));
         const tokenFs = await grecaptcha.execute(SITE_KEY, { action: "contact_formspree" });

// أرسل الاثنين للـ API
         const r = await fetch("/api/contact", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ ...payload, tokenServer, tokenFs }),
         });
    const data = await r.json();
    if (!r.ok || !data.ok) throw new Error(data?.error || "Submission failed");

    setStatus("ok");
    form.reset();
  } catch (err: any) {
    setStatus("err");
    setErrMsg(err?.message || "Something went wrong");
  }
}

  return (
    <>
      <Head>
        <title>Contact — Standora</title>
        <link rel="icon" href="/standora-icon.ico" />
      </Head>

      {/* Load script reCAPTCHA v3 */}
      <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="afterInteractive" />

      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl font-bold">Contact us</h1>
          <p className="mt-3 text-white/70">
            For partnerships, pilots, enterprise licensing, or a tailored demo, reach out below.
          </p>

          <form onSubmit={handleSubmit} className="card p-6 mt-6 space-y-3">
            {/* Honeypot (anti-spam) */}
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

            {/* Name (required) */}
            <input
              className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
              placeholder="Your full name"
              name="name"
              aria-label="Your full name"
              required
            />

            {/* Company (optional) */}
            <div className="relative">
              <input
                className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
                placeholder="Company (optional)"
                name="company"
                aria-label="Company (optional)"
              />
              <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            </div>

            {/* Work email (required) */}
            <input
              type="email"
              className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
              placeholder="Work email"
              name="email"
              aria-label="Work email"
              required
            />

            {/* Subject (required) */}
            <input
              className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
              placeholder="Subject"
              name="subject"
              aria-label="Subject"
              required
            />

            {/* Details (renamed from 'message') */}
            <textarea
              rows={6}
              className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
              placeholder="Project details, timelines, target markets, constraints…"
              name="details"
              aria-label="Project details"
              required
            />

            {/* Phone (optional) */}
            <div className="relative">
              <input
                className="w-full rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none"
                placeholder="Phone (optional)"
                name="phone"
                aria-label="Phone (optional)"
              />
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
            </div>

            <button
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : <>Send message <Send className="h-4 w-4" /></>}
            </button>

            {status === "ok" && (
              <p className="text-sm text-emerald-400">Thanks! Your message has been sent.</p>
            )}
            {status === "err" && (
              <p className="text-sm text-red-400">Submission failed: {errMsg}</p>
            )}

            <p className="text-xs text-white/50">
              Protected by reCAPTCHA. Submissions are delivered via Formspree.
            </p>
          </form>

          <div className="mt-4">
            <a href="mailto:support@standora.co.uk" className="inline-flex items-center gap-2 underline">
              <Mail className="h-4 w-4" /> support@standora.co.uk
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
