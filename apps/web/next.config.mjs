import './src/env.mjs';

import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants.js';
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';
import { withAxiom } from 'next-axiom';

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  transpilePackages: ['@cubik/database', '@cubik/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '*/**',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
        port: '',
        pathname: '*/**',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '*/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // remove this later
        port: '',
        pathname: '*/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.helius-rpc.com', // remove this later
        port: '',
        pathname: '*/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import('@ducanh2912/next-pwa')).default({
      dest: 'public',
      workboxOptions: {
        disableDevLogs: true,
      },
    });
    return withPWA(withAxiom(config));
  }
  return withAxiom(config);
};

export default nextConfigFunction;
