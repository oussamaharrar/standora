import { useEffect, useState } from "react";

const STORAGE_KEY = "standora_cookie_consent";

type ConsentState = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleConsent(value: ConsentState) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 px-4 sm:px-6 lg:px-8 z-40">
      <div className="mx-auto max-w-4xl card p-5 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-white/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">
            We use essential cookies to analyse reliability and security. See our <a className="underline" href="/privacy">Privacy Policy</a> for details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => handleConsent("declined")}
              className="btn btn-ghost text-sm"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="btn btn-primary text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
