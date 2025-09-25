import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Developers() {
  return (
    <>
      <Head>
        <title>Developers — Standora</title>
        <meta name="description" content="Quickstart, CLI, configs and artifacts for Standora’s RL LLM agent stack." />
        <meta property="og:title" content="Standora for Developers" />
        <meta
          property="og:description"
          content="Quickstart commands, CLI reference, config modes and artifact formats for Standora’s RL LLM stack."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.ai/developers" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Standora for Developers" />
        <meta
          name="twitter:description"
          content="Review quickstart commands, CLI tools, configs and safety promotion practices for Standora."
        />
        <link rel="icon" href="/standora-icon.ico" />
      </Head>
      <div className="min-h-screen bg-[#0b0e14] text-white bg-grid">
        <Nav />
        <main className="container py-16 md:py-24 max-w-4xl space-y-12">
          <section>
            <h1 className="text-4xl font-bold">Developers</h1>
            <p className="mt-3 text-white/70">Start locally with synthetic data, evaluate safely, then experiment with paper/sandbox gateways before going live.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Quickstart</h2>
            <pre className="mt-4 text-sm bg-white/5 p-4 rounded-xl overflow-auto">{`pip install -r requirements.txt
python -m bot_trade.tools.gen_synth_data --symbol BTCUSDT --frame 1m --out data_ready
python -m bot_trade.train_rl --algorithm PPO --symbol BTCUSDT --frame 1m --device cpu --n-envs 1 --total-steps 128 --headless --allow-synth --data-dir data_ready
python -m bot_trade.tools.eval_run --symbol BTCUSDT --frame 1m --run-id latest --tearsheet
# Hyperparameter sweep
python -m bot_trade.tools.sweep --mode random --n-trials 4 --symbol BTCUSDT --frame 1m --algorithm SAC --continuous-env --headless --allow-synth --data-dir data_ready`}</pre>
            <p className="mt-2 text-white/60 text-sm">The commands above produce artifacts, a tearsheet PDF and a ranked summary for sweeps.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Key CLI</h2>
            <ul className="mt-3 text-white/70 list-disc pl-5 space-y-2">
              <li><code>python -m bot_trade.train_rl</code> — training orchestration.</li>
              <li><code>python -m bot_trade.tools.eval_run</code> — evaluation & PDF tearsheet.</li>
              <li><code>python -m bot_trade.tools.sweep</code> — random/grid sweeps.</li>
              <li><code>python -m bot_trade.tools.dev_checks</code> — integrity & artifact gates.</li>
              <li><code>python -m bot_trade.tools.panel_gui</code> — local control panel.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Configs & Modes</h2>
            <p className="text-white/70">Data sources: CSV/Parquet or ccxt live collectors. Modes: raw/live. Gateways: paper/sandbox. Regime controller and risk rules are configurable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Artifacts & Logs</h2>
            <p className="text-white/70">CSV/JSON/PNG artifacts are written periodically. Risk and decisions are exported as JSONL for audits; knowledge base snapshots track run metadata.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Safety & Promotion</h2>
            <p className="text-white/70">Use canary → shadow → production with objective thresholds on stability and slippage. Circuit-breakers and exposure caps are enforced at runtime.</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
