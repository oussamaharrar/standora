const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://standora.ai";

/** @type {{ siteUrl: string; routes: string[]; robots?: { policy?: { userAgent: string; allow?: string; disallow?: string; }[] } }} */
module.exports = {
  siteUrl,
  routes: [
    "/",
    "/about",
    "/contact",
    "/developers",
    "/changelog",
    "/privacy",
    "/terms",
    "/security",
  ],
  robots: {
    policy: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
