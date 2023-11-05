;
/** @type {import('next').NextConfig} */
import { withAxiom } from "next-axiom";





const nextConfig = {
  transpilePackages: ["@cubik/ui"],
  reactStrictMode: true,
  images: {
    domains: ["imagedelivery.net"],
  },
};

module.exports = withAxiom(nextConfig);
