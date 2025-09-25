import { motion } from "framer-motion";
import { ChevronRight, LineChart, Send, Download } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onWaitlistSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!SITE_KEY) {
      setStatus("err");
      setError("Waitlist temporarily unavailable. Please try again later.");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const captcha = (window as any)?.grecaptcha;
      if (!captcha) {
        throw new Error("reCAPTCHA unavailable");
      }

      const tokenServer = await new Promise<string>((resolve, reject) => {
        try {
          captcha.ready(() => {
            captcha
              .execute(SITE_KEY, { action: "waitlist" })
              .then(resolve)
              .catch(reject);
          });
        } catch (err) {
          reject(err);
        }
      });

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tokenServer }),
      });

      const payload = await response.json();
      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Something went wrong. Please try again.");
      }

      setStatus("ok");
      setEmail("");
    } catch (err: any) {
      setStatus("err");
      setError(err?.message || "Network error. Please try again.");
    }
  }

  return (
    <section className="relative">
      {SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="afterInteractive" />
      )}
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Autonomous <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">RL LLM Agent</span> for High‑Frequency Trading
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-white/70 text-lg"
            >
              Standora fuses reinforcement learning with large‑language‑model reasoning to plan, execute, and adapt across volatile markets in milliseconds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact" className="btn btn-primary no-underline">
                Get a live demo <ChevronRight className="h-5 w-5" />
              </Link>
              <a href="/sample-report.pdf" className="btn btn-ghost no-underline" rel="noopener" target="_blank">
                Download sample report (PDF) <Download className="h-5 w-5" />
              </a>
            </motion.div>
            <motion.form
              onSubmit={onWaitlistSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl"
              aria-label="Join the waitlist"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                aria-label="Work email"
                required
              />
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <span>Joining…</span> <Send className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Join the waitlist</span> <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-xs text-white/50 sm:col-span-2">No spam. Unsubscribe anytime.</p>
              {status === "ok" && (
                <p className="text-sm text-emerald-400 sm:col-span-2" role="status">
                  You’re on the list. We’ll be in touch soon.
                </p>
              )}
              {status === "err" && error && (
                <p className="text-sm text-red-400 sm:col-span-2" role="alert">
                  {error}
                </p>
              )}
            </motion.form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md md:max-w-none">
              <div className="aspect-[4/3] rounded-3xl border border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-2xl border border-[rgba(255,255,255,0.15)] bg-black/40 p-4">
                      <LineChart className="h-6 w-6 text-emerald-400" />
                      <div className="mt-3 h-2 w-full rounded bg-white/10" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[rgba(255,255,255,0.15)] bg-black/40 p-4">
                  <p className="text-sm text-white/70">Live metrics: PnL · Sharpe · DD · Latency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
