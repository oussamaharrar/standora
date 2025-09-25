import type { NextApiRequest, NextApiResponse } from "next";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || "";
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || "";

async function verifyRecaptcha(token: string) {
  if (!RECAPTCHA_SECRET) {
    throw new Error("Missing RECAPTCHA_SECRET");
  }

  const params = new URLSearchParams();
  params.append("secret", RECAPTCHA_SECRET);
  params.append("response", token);

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verify failed with status ${response.status}`);
  }

  const data = await response.json();
  if (!data.success || (typeof data.score === "number" && data.score < 0.5)) {
    throw new Error("reCAPTCHA verification failed");
  }
}

async function forwardLead(payload: {
  name: string;
  company: string;
  role: string;
  email: string;
  useCase: string;
  deskAum: string;
  message: string;
}) {
  if (!WEBHOOK_URL) return;

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `Standora lead\nName: ${payload.name}\nCompany: ${payload.company}\nRole: ${payload.role}\nEmail: ${payload.email}\nUse-case: ${payload.useCase}\nDesk/AUM: ${payload.deskAum}\nMessage: ${payload.message}`,
      ...payload,
    }),
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, company, role, email, useCase, deskAum, message, token } = req.body || {};

  if (!name || !company || !role) {
    res.status(400).json({ ok: false, error: "Name, company, and role are required" });
    return;
  }
  if (!email || !/.+@.+\..+/.test(String(email))) {
    res.status(400).json({ ok: false, error: "A valid work email is required" });
    return;
  }
  if (!useCase || !deskAum || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }
  if (!token) {
    res.status(400).json({ ok: false, error: "Missing reCAPTCHA token" });
    return;
  }

  try {
    await verifyRecaptcha(String(token));
    await forwardLead({
      name: String(name),
      company: String(company),
      role: String(role),
      email: String(email),
      useCase: String(useCase),
      deskAum: String(deskAum),
      message: String(message),
    });
    res.status(200).json({ ok: true });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error?.message || "Server error" });
  }
}
