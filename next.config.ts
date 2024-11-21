import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
        protocol: "https",
      },
      {
        hostname: "static.vecteezy.com",
        protocol: "https",
      },
      {
        hostname: "cloud.appwrite.io",
        protocol: "https",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
