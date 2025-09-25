import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const configPath = path.resolve(root, "next-sitemap.config.js");
const configModule = await import(pathToFileURL(configPath));
const config = configModule.default ?? configModule;

if (!config?.siteUrl) {
  throw new Error("siteUrl missing in next-sitemap.config.js");
}

const siteUrl = String(config.siteUrl).replace(/\/$/, "");
const routes = Array.isArray(config.routes) ? config.routes : ["/"];

const urls = routes.map((route) => {
  const normalized = route === "/" ? "/" : route;
  return `  <url><loc>${siteUrl}${normalized}</loc></url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

await fs.writeFile(path.resolve(root, "public/sitemap.xml"), sitemap, "utf8");

const sitemapUrl = `${siteUrl}/sitemap.xml`;
const policies = config?.robots?.policy ?? [{ userAgent: "*", allow: "/" }];
const robotsChunks = [];
for (const policy of policies) {
  robotsChunks.push(`User-agent: ${policy.userAgent}`);
  if (policy.allow) robotsChunks.push(`Allow: ${policy.allow}`);
  if (policy.disallow) robotsChunks.push(`Disallow: ${policy.disallow}`);
  robotsChunks.push("");
}
robotsChunks.push(`Sitemap: ${sitemapUrl}`);
const robots = robotsChunks.join("\n").replace(/\n{3,}/g, "\n\n");

await fs.writeFile(path.resolve(root, "public/robots.txt"), robots.endsWith("\n") ? robots : `${robots}\n`, "utf8");

console.log("Generated sitemap.xml and robots.txt");
