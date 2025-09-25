export const CHANGELOG = [
  {
    date: "2025-10-24",
    title: "Phase D wiring & Panel v3",
    what: "Added data router (raw/live), minimal ai_core pipeline, strategy registry, orchestrator stubs and YAML command registry for the UI panel.",
    why: "Begin production wiring for strategy composition and multi-run orchestration.",
    ref: "DEV_NOTES"
  },
  {
    date: "2025-10-20",
    title: "TD3/TQC & adaptive/risk wiring",
    what: "Hardened TD3/TQC builders, regime detector and adaptive controller; runtime risk rule registry with JSONL logging.",
    why: "Parity across algos and configurable safety.",
    ref: "DEV_NOTES"
  },
  {
    date: "2025-10-12",
    title: "Sandbox & analysis tools",
    what: "Sandbox gateway with Binance/Bybit testnets, live-dry-run, walk-forward analysis gate and Optuna-based sweeper.",
    why: "Safe connectivity and formal evaluation.",
    ref: "DEV_NOTES"
  },
  {
    date: "2025-09-29",
    title: "Execution realism & safety",
    what: "ExecutionSim for slippage/latency/partial fills + circuit-breaker risk guards; diagnostics and new log columns.",
    why: "Make simulations more realistic and safer.",
    ref: "DEV_NOTES"
  }
];
