import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/delta-alpha-pi-website",
  assetPrefix: "/delta-alpha-pi-website/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
