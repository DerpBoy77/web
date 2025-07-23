import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove output standalone for Netlify
  // Netlify plugin handles this automatically
};

export default nextConfig;
