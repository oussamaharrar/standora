import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href="https://standora.co.uk/" />
        <meta property="og:title" content="Standora — RL LLM Agent for HFT" />
        <meta
          property="og:description"
          content="Latency-first RL LLM agent with execution & risk controls, sandbox gateways, and reproducible evaluation."
        />
        <meta property="og:image" content="https://standora.co.uk/og-card.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://standora.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://standora.co.uk/og-card.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
