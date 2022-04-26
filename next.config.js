/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [
    nextTranslate,
    withBundleAnalyzer
  ], 
  {
    reactStrictMode: true,
    experimental: {
      outputStandalone: process.env.IS_DOCKER_BUILD === 'true' ? true : false,
    },
  }
);