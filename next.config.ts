import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', process.env.NETLIFY_URL || '', process.env.URL || ''].filter(Boolean)
    }
  }
};

export default nextConfig;
