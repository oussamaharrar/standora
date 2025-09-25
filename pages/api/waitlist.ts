import type { NextApiRequest, NextApiResponse } from "next";

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET || "";
  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET");
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  return response.json() as Promise<{ success: boolean; score?: number }>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { email, tokenServer } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    const verification = await verifyRecaptcha(typeof tokenServer === "string" ? tokenServer : "");
    if (!verification?.success || (typeof verification.score === "number" && verification.score < 0.5)) {
      return res.status(400).json({ ok: false, error: "reCAPTCHA verification failed" });
    }

    const provider = (process.env.WAITLIST_PROVIDER || "formspree").toLowerCase();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      if (provider === "webhook") {
        const url = process.env.WAITLIST_WEBHOOK_URL || "";
        if (!url) {
          throw new Error("Missing WAITLIST_WEBHOOK_URL");
        }

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.WAITLIST_WEBHOOK_SECRET
              ? { "X-Waitlist-Secret": process.env.WAITLIST_WEBHOOK_SECRET }
              : {}),
          },
          body: JSON.stringify({ email, source: "website", ts: new Date().toISOString() }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Webhook responded ${response.status}`);
        }
      } else {
        const endpoint = process.env.WAITLIST_FORMSPREE_ENDPOINT || "";
        if (!endpoint) {
          throw new Error("Missing WAITLIST_FORMSPREE_ENDPOINT");
        }

        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("_subject", "New Waitlist — Standora");
        formData.append("_gotcha", "");

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Formspree responded ${response.status}`);
        }
      }
    } finally {
      clearTimeout(timeout);
    }

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    const message = typeof error?.message === "string" ? error.message : "Server error";
    return res.status(500).json({ ok: false, error: message });
  }
}
