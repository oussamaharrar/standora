// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpqgpgg";
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || "";

// ────────────────────────────────
// Helper: Forward payload to Formspree
// ────────────────────────────────
async function forwardToFormspree(payload: {
  name?: string;
  company?: string;
  email: string;
  subject?: string;
  details: string;
  phone?: string;
  tokenFs?: string;
}) {
  if (!payload?.email || !/.+@.+\..+/.test(payload.email)) {
    throw new Error("Email is missing or invalid");
  }

  const params = new URLSearchParams();
  params.append("name", payload.name || "");
  params.append("company", payload.company || "");
  params.append("email", payload.email || "");
  params.append("subject", payload.subject || "");
  params.append("details", payload.details || "");
  params.append("phone", payload.phone || "");
  params.append(
    "_subject",
    payload.subject || "New Standora Contact — Website Form"
  );
  params.append("_gotcha", "");
  params.append("g-recaptcha-response", payload.tokenFs || "");

  const ac = new AbortController();
  const timeout = setTimeout(() => ac.abort(), 15000);

  try {
    const r = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: params,
      signal: ac.signal,
    });

    clearTimeout(timeout);

    if (!r.ok) {
      const text = await r.text();
      throw new Error(`Formspree responded ${r.status}: ${text}`);
    }
  } catch (e: any) {
    clearTimeout(timeout);
    throw new Error(`Forwarding to Formspree failed: ${e?.message || e}`);
  }
}

// ────────────────────────────────
// API Handler
// ────────────────────────────────
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const {
    name,
    company,
    email,
    subject,
    details,
    phone,
    tokenServer,
    tokenFs,
  } = req.body || {};

  try {
    // تحقق reCAPTCHA (tokenServer)
    if (!tokenServer) {
      res
        .status(400)
        .json({ ok: false, error: "Missing reCAPTCHA token (server)" });
      return;
    }
    if (!RECAPTCHA_SECRET) {
      res.status(500).json({ ok: false, error: "Missing RECAPTCHA_SECRET" });
      return;
    }

    const verifyParams = new URLSearchParams();
    verifyParams.append("secret", RECAPTCHA_SECRET);
    verifyParams.append("response", tokenServer);

    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verifyParams.toString(),
      }
    );
    const result = await verify.json();

    if (!result.success || (typeof result.score === "number" && result.score < 0.5)) {
      res.status(400).json({ ok: false, error: "reCAPTCHA verification failed", result });
      return;
    }

    // أرسل البيانات إلى Formspree
    await forwardToFormspree({
      name,
      company,
      email,
      subject,
      details,
      phone,
      tokenFs,
    });

    res.status(200).json({ ok: true });
  } catch (e: any) {
    res
      .status(500)
      .json({ ok: false, error: e?.message || "Server error" });
  }
}
