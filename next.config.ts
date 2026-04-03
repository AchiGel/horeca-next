import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "imgur.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/og-logo.png",
        headers: [
          { key: "Content-Type", value: "image/png" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
