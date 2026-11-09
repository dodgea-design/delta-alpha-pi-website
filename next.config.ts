import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/criteria-and-pledge", destination: "/about#membership", permanent: true },
      { source: "/about-us/dapi-member-benefits", destination: "/about", permanent: true },
      { source: "/about-us/dapi-officers-and-board-of-directors", destination: "/about", permanent: true },
      { source: "/about-us/honorary-dapi-members", destination: "/about", permanent: true },
      { source: "/about-us/meet-some-members", destination: "/about", permanent: true },
      { source: "/dapi-scholarship", destination: "/scholarship", permanent: true },
      { source: "/dapi-scholarship/:path*", destination: "/scholarship", permanent: true },
      { source: "/elementor-2203", destination: "/scholarship#recipient-2022", permanent: true },
      { source: "/delta-alpha-pi-international-dapi-chapters", destination: "/chapters", permanent: true },
      { source: "/delta-alpha-pi-international-dapi-chapters/:path*", destination: "/chapters", permanent: true },
      { source: "/presentations", destination: "/resources", permanent: true },
      { source: "/presentations/:path*", destination: "/resources", permanent: true },
      { source: "/order-dapi-lapel-pins-and-or-honor-cords", destination: "/pins-and-cords", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
