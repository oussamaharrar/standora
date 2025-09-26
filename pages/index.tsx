import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkipLink from "@/components/SkipLink";
import { motion } from "framer-motion";
import {
  Bolt,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Database,
  Fingerprint,
  Network,
  Timer,
  MonitorSmartphone,
  LineChart,
  Building2,
  Landmark,
  Briefcase,
  Globe2,
  Gauge
} from "lucide-react";

export default function Home() {
  const features = [
    { icon: <Bolt className="h-6 w-6" />, title: "Latency-First Core", desc: "Sub-10ms decision loops with pinned cores, prewarmed models, speculative execution and micro-batching." },
    { icon: <BrainCircuit className="h-6 w-6" />, title: "RL LLM Planner", desc: "LLM proposes intents; RL policies score actions under strict risk/latency budgets." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Execution & Risk Layer", desc: "Depth/volatility/latency-aware fills, partial fills and circuit-breakers with JSONL decision logs and immutable decision records." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Paper & Sandbox Gateways", desc: "Safe dry-runs on Binance/Bybit testnets before production; promote only on objective stability windows." },
    { icon: <Timer className="h-6 w-6" />, title: "Deterministic Backtests", desc: "PTP-synced timelines, reproducible replays, versioned datasets and JSONL decision logs." },
    { icon: <MonitorSmartphone className="h-6 w-6" />, title: "Ops Console", desc: "A control panel for sessions, device pinning, risk knobs, kill-switches and live telemetry." },
    { icon: <LineChart className="h-6 w-6" />, title: "Evaluation & Reports", desc: "Walk-forward analysis with embargo and PDF tearsheets covering PnL, Sharpe, drawdown and latency distributions." },
    { icon: <Workflow className="h-6 w-6" />, title: "Hyperparameter Sweep", desc: "CPU-friendly random/grid sweeps with ranked summaries and gates." },
    { icon: <Database className="h-6 w-6" />, title: "Data Router & Collectors", desc: "CSV/Parquet and ccxt collectors, raw/live modes and feature verification guards." },
    { icon: <Network className="h-6 w-6" />, title: "Signal Fabric & AI-Core", desc: "Feature store with classical/learned indicators and ai_core signals; regime-aware mapping and adapters." },
    { icon: <Gauge className="h-6 w-6" />, title: "Strategy & Regime Controller", desc: "PPO, SAC, TD3/TQC with adaptive rewards/risk clamps and safe promotion." },
    { icon: <Fingerprint className="h-6 w-6" />, title: "Auditability & Compliance", desc: "Immutable logs, JSONL decision log exports, reproducible backtests and policy promotion via canary/shadow windows." },
  ];

  const how = [
    { step: "01", title: "Market Ingestion & Retrieval", desc: "Streams: L2 order-books, ticks, klines; macro/event feeds. LLM retrieves context windows (venue state, volatility regime)." },
    { step: "02", title: "Feature Store & Indicators", desc: "Classical (RSI/MACD/BB), learned latent factors, microstructure (imbalance, queue dynamics). Synthetic labels keep features fresh." },
    { step: "03", title: "LLM Planning", desc: "LLM proposes intents (accumulate/flip/hedge/flat) with constraints. Hypotheses go to the RL policy layer for scoring." },
    { step: "04", title: "RL Policy & Risk Budget", desc: "Policy head scores actions under limits: max exposure, VaR budget, latency target, inventory constraints." },
    { step: "05", title: "Execution Engine", desc: "Router batches orders, simulates slippage, routes per venue. Co-location optional with micro-burst cancellation." },
    { step: "06", title: "Safe Experimentation", desc: "Run paper/sandbox dry-runs on testnets with the same risk and execution rules. Promote only when stability gates pass." },
    { step: "07", title: "Safe Online Updates", desc: "Off-policy updates with replay buffers and anomaly filters. Canary then shadow before production promotion." },
    { step: "08", title: "Monitoring & Reports", desc: "Latency tracing, JSONL decision logs, PDF performance packs. Alerts fire on drift, liquidity, or anomaly spikes." },
  ];

  const infra = [
    { title: "GPU Fleet", desc: "45× NVIDIA A100 40GB (NVLink) for distributed RL + LLM fine-tuning; burst pools A40/V100/H100." },
    { title: "Orchestration", desc: "Kubernetes + Ray for elastic rollouts; priority lanes for live; backpressure for research queues." },
    { title: "Serving", desc: "Triton/ggml backends; quantized heads for low-latency; blue/green + canary/shadow pipelines." },
    { title: "Data Fabric", desc: "Parquet/Feather lake; catalog + lineage; Kafka/Redpanda streaming; deterministic replay for backtests." },
    { title: "Networking", desc: "100GbE, kernel bypass (DPDK) where available; PTP for microsecond time sync; venue co-location options." },
    { title: "Storage & Checkpoints", desc: "Object store with versioned checkpoints; rollback at any point; tiered replay buffers (hot/warm/cold)." },
    { title: "Observability", desc: "Metrics, traces, logs unified; Grafana-like dashboards; structured JSONL decision logs for audits; SLOs/SLAs." },
    { title: "Security", desc: "RBAC, key vault, TLS everywhere, signed artifacts; SBOM and dependency scanning CI." },
  ];

  const compliance = [
    { title: "Regulatory Posture", desc: "Software platform for research/execution; requires user’s own brokerage/venue accounts and approvals." },
    { title: "Frameworks", desc: "SOC 2 Type II posture, ISO 27001 alignment, GDPR principles; data minimization and encryption in transit." },
    { title: "Risk Controls", desc: "Exposure caps, drawdown locks, warm-ups, anomaly halts; pre-/post-trade checks and liquidity filters." },
    { title: "Auditability", desc: "Immutable logs, versioned datasets, reproducible backtests; exportable PDF/JSONL decision log packs for review." },
    { title: "Market Rules", desc: "Guidance for MiFID II/ESMA, SEC/FINRA, FCA, MAS contexts; stress scenarios and kill-switch procedures." },
  ];

  const studies = [
    { title: "Crypto Volatility 2024", metric: "Max DD 1.1%", desc: "During a 20% BTC shock in hours, agent switched to ‘latency-adaptive’ mode, tightened risk budget, and preserved capital with micro-hedges." },
    { title: "Forex Flash Window", metric: "Fill time 12ms", desc: "EUR/CHF spike: router throttled exposure, favored deeper venues; partial fills reduced slippage by ~18% vs naive baseline." },
    { title: "Earnings Season Alpha", metric: "Sharpe +0.7", desc: "LLM event planner filtered false positives and limited position time-in-market during high spreads." },
    { title: "DeFi Liquidity Crunch", metric: "Hedge time 50ms", desc: "Position sizing adapted to pool depth; circuit-breakers paused risk-on until spreads normalized." },
  ];

  const clients = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Crypto Funds",
      desc: "Institutional-grade execution across volatile digital assets. Venue-aware routing, depth/latency-sensitive fills, configurable risk caps and audit-ready JSONL decision logs.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Proprietary Trading Desks",
      desc: "Custom RL policies per symbol/venue with regime-aware rewards. Fast iteration via paper/sandbox dry-runs, sweeps and reproducible backtests.",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Brokers & Exchanges",
      desc: "Signal and execution infrastructure with compliance-friendly risk layer. Plug-and-play router integration, reporting packs and client-side analytics.",
    },
  ];

  const faq = [
    { q: "How do you maintain latency budgets?", a: "Pinned CPU cores for hot paths, GPU-accelerated inference heads, prewarmed models, speculative execution, and PTP-synced clocks over 100GbE." },
    { q: "What does reward shaping look like in production?", a: "Multi-objective rewards (PnL, volatility penalty, slippage, drawdown/var breaches). Regime-aware weights adapt per asset and microstructure." },
    { q: "How is safety enforced in live trading?", a: "Circuit-breakers, exposure caps, session warm-ups, anomaly halts, and canary/shadow deployments. Deterministic backtests and immutable JSONL decision logs." },
    { q: "Can I customize policies?", a: "Yes—per venue/symbol/timeframe, with risk budgets and activation conditions. Policies can be swapped or blended based on observed regimes." },
    { q: "What is the execution bridge?", a: "A pluggable engine that simulates depth, volatility and latency, supports partial fills and routes orders per venue under risk rules." },
    { q: "How do risk rules work?", a: "Configurable exposure caps, drawdown locks, spread jumps, gap/liquidity guards and loss-streak brakes, with JSONL decision logs for audits." },
    { q: "How do you evaluate safely?", a: "Walk-forward analysis with embargo and reproducible backtests. PDF tearsheets track PnL, Sharpe, DD and latency distributions." },
    { q: "Can I try it without going live?", a: "Yes. Use paper and sandbox gateways with the same execution/risk layer before production promotion." },
  ];

  return (
    <>
      <Head>
        <title>Standora — RL LLM Agent for HFT</title>
        <meta name="description" content="Standora is an RL LLM agent for high-frequency trading with ultra-low-latency execution, capital protection, and online learning." />
        <meta property="og:title" content="Standora — RL LLM Agent for HFT" />
        <meta property="og:description" content="Latency-first RL LLM stack with execution and risk controls, sandbox gateways, evaluation packs, and institutional governance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Standora — RL LLM Agent for HFT" />
        <meta name="twitter:description" content="Latency-first RL LLM stack with execution and risk controls, sandbox gateways, evaluation packs, and institutional governance." />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>

      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <SkipLink />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <img
            src="/mesh.svg"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            alt=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <img
            src="/ai-orb.svg"
            className="absolute -top-40 right-10 w-[28rem] opacity-70"
            alt=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>

        <Nav />
        <main id="main">
          <Hero />

          {/* Features */}
          <section id="features" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Features you actually need in production</h2>
                <p className="section-sub">Focused on speed, stability, and capital preservation—without sacrificing adaptability.</p>
              </div>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className="card p-6 hover:bg-white/[0.07]"
                  >
                    <div className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-[rgba(255,255,255,0.15)] p-3 mb-4">{f.icon}</div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how" className="scroll-mt-[var(--header-h)] py-16 md:py-24">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">How It Works</h2>
                <p className="section-sub">LLM planning → RL policy execution → safe online adaptation under strict latency & risk budgets.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                {how.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.02 }}
                    className="card p-6 space-y-2 leading-relaxed"
                  >
                    <div className="text-sm text-white/50" aria-hidden="true">{s.step}</div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-white/70">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section id="case-studies" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Case Studies</h2>
                <p className="section-sub">Selected scenarios showing how the agent behaves under stress and regime shifts.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-4 gap-4">
                {studies.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className="card p-6"
                  >
                    <div className="text-xs text-white/50">Scenario</div>
                    <h3 className="mt-1 font-semibold">{c.title}</h3>
                    <div className="mt-2 text-emerald-400 text-sm">{c.metric}</div>
                    <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Client Sectors */}
          <section id="clients" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Who We Serve</h2>
                <p className="section-sub">Purpose-built for institutional execution and research workflows.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {clients.map((c, i) => (
                  <div key={i} className="card p-6">
                    <div className="inline-flex items-center gap-2 text-white/80">
                      <span>{c.icon}</span>
                      <span className="font-semibold">{c.title}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section id="infrastructure" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Training & Infrastructure</h2>
                <p className="section-sub">Hybrid cluster engineered for low latency and high throughput—supporting offline training and safe online learning.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-4 gap-4">
                {infra.map((b, i) => (
                  <div key={i} className="card p-6">
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section id="compliance" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Compliance & Security</h2>
                <p className="section-sub">We align with global best practices; Standora is a software platform, not a broker or advisor.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-5 gap-4">
                {compliance.map((c, i) => (
                  <div key={i} className="card p-6">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical FAQ */}
          <section id="faq" className="scroll-mt-[var(--header-h)] py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="section-title">Technical FAQ</h2>
                <p className="section-sub">Deeper answers for quant engineers, infra operators, and compliance teams.</p>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-4">
                {faq.map((f, i) => (
                  <div key={i} className="card p-6">
                    <h3 className="font-semibold">{f.q}</h3>
                    <p className="mt-2 text-sm text-white/70">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
