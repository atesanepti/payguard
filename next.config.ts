import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["kxkhopibozwjrllgloiy.supabase.co"],
  },
};

export default nextConfig;
