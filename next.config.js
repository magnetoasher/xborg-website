const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');

const { i18n } = require('./next-i18next.config');
const { redirects } = require('./next-redirect.config');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv').config({
    path: path.join(__dirname, '../../.local/env'),
  });

  console.debug('dotenv', dotenv.parsed);
} else {
  console.debug('ENV', process.env);
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  i18n,
  redirects,
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-xborg-inventory.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-xborg-questing-quests.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
