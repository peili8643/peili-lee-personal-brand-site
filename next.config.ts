import type { NextConfig } from "next";


// Minimal type shape for the config object
type WebpackDevMiddlewareConfig = {
  watchOptions?: {
    poll?: number;
    aggregateTimeout?: number;
  };
};

const nextConfig: NextConfig = {
  /* config options here */
  webpackDevMiddleware: (config: WebpackDevMiddlewareConfig) => {
    config.watchOptions = {
      poll: 1000, // check for file changes every 1s
      aggregateTimeout: 300, // delay before rebuilding
    };
    return config;
},
};

export default nextConfig;
