/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@heartlandone/vega-react']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig)