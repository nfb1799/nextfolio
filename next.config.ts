import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
  // Pin the root: a stray package-lock.json in the home directory otherwise
  // makes Next infer the wrong workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
