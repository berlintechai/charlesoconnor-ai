import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into the "out" folder. No server is needed,
  // so the site hosts for free on Netlify, Cloudflare Pages or GitHub Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
