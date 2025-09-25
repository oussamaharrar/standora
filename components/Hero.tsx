import { motion } from "framer-motion";
import { ChevronRight, LineChart, Send, Download } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative">
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
              Autonomous <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">RL LLM Agent</span> for High‑Frequency Trading
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-5 text-white/70 text-lg">
              Standora fuses reinforcement learning with large‑language‑model reasoning to plan, execute, and adapt across volatile markets in milliseconds.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="btn btn-primary no-underline">
                Get a live demo <ChevronRight className="h-5 w-5" />
              </a>
              <a href="/sample-report.pdf" className="btn btn-ghost no-underline" rel="noopener" target="_blank">
                Download sample report (PDF) <Download className="h-5 w-5" />
              </a>
            </motion.div>
            <motion.form onSubmit={(e) => e.preventDefault()} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your work email" className="rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60" required />
              <button type="submit" className="btn btn-primary" title="Hook to your backend or form tool">
                Join the waitlist <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-white/50 sm:col-span-2">No spam. Unsubscribe anytime.</p>
            </motion.form>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
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
