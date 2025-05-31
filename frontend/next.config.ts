import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thinkbig.org.np",
      },
      {
        protocol: "https",
        hostname: "www.msmahato.com.np",
      },
      {
        protocol: "https",
        hostname: "www.gamvirss.edu.np",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_COMMIT_TIMESTAMP: process.env.VERCEL_GIT_COMMIT_TIMESTAMP || new Date().toISOString(),
  },
};

export default nextConfig;
