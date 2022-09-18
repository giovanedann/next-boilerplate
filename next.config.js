// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isInProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public',
  disable: !isInProd,
  reactStrictMode: true,
  swcMinify: true
})

module.exports = nextConfig
