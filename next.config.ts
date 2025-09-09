import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  // @ts-expect-error – Next.js doesn't export types for this hook
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
