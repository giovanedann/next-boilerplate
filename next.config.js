const isInProd = process.env.NODE_ENV === 'production'
const plugins = []

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isInProd
})

plugins.push(withPWA)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = plugins.reduce((acc, current) => current(acc), nextConfig)
