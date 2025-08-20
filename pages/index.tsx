import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Standora — High-Frequency AI Trading</title>
        <meta
          name="description"
          content="Standora is an autonomous, reinforcement-learning system built for ultra-low latency execution, adaptive risk, and continuous self-improvement across volatile markets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#0b0e14] text-white min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Metrics />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}