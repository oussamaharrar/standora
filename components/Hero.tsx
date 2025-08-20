import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            High-Frequency{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              AI Trading
            </span>
          </motion.h1>
          <p className="mt-5 text-white/70 text-lg">
            Standora is an autonomous reinforcement-learning system built for
            ultra-low latency execution, adaptive risk, and continuous
            self-improvement across volatile markets.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-medium shadow-lg"
            >
              Get a live demo <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}