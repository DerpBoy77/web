import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify deployment optimizations */
  trailingSlash: true,
  
  // Image optimization settings for Netlify
  images: {
    domains: [], // Add any external image domains you use
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimize for production
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
