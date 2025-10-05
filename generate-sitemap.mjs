// generate-sitemap.mjs
import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { blogPosts } from "./src/blog-meta.js"; // <- Only metadata, no .vue!

const hostname = "https://orangize.de";

// Static routes
const staticRoutes = [
  "/",
  "/website-erstellen-lassen",
  "/website-erstellen-herford",
  "/website-erstellen-minden",
  "/website-erstellen-buende",
  "/website-erstellen-porta-westfalica",
  "/website-erstellen-bad-oeynhausen",
  "/website-erstellen-bielefeld",
  "/google-ads",
  "/google-ads-analyse",
  "/google-ads-porta-westfalica",
  "/google-ads-bielefeld",
  "/google-ads-buende",
  "/google-ads-herford",
  "/google-ads-minden",
  "/blog",
  "/impressum",
  "/datenschutz",
];

// Blog post URLs
const blogRoutes = blogPosts.map((post) => ({
  url: `/blog/${post.slug}`,
  changefreq: "monthly",
  priority: 0.7,
  lastmod: post.date,
}));

const links = [
  ...staticRoutes.map((url) => ({
    url,
    changefreq: "monthly",
    priority: 0.8,
  })),
  ...blogRoutes,
];

// Write the sitemap
const sitemap = new SitemapStream({ hostname });

streamToPromise(sitemap).then((data) => {
  const sitemapPath = path.resolve("public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, data.toString());
  console.log("✅ Sitemap generated with", links.length, "routes.");
});

links.forEach((link) => sitemap.write(link));
sitemap.end();
