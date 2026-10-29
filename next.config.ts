import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server hot-reload when viewed through a preview proxy
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
