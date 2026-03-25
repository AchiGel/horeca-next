import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/68737d2bb8770766396d10fc",
        destination: "/articles/michelin-stars",
        permanent: true,
      },
      {
        source: "/articles/68737dc65fb2b5ad68c2df75",
        destination: "/articles/chimerioni",
        permanent: true,
      },
      {
        source: "/articles/68737e3c5fb2b5ad68c2df77",
        destination: "/articles/chai-tu-ti",
        permanent: true,
      },
      {
        source: "/articles/69c25dc85cbea2504d2c765c",
        destination: "/articles/chveni-pop-art-gastro",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
