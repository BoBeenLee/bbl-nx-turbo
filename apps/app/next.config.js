/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ['@bbl-turbo/ui-components'],
  },
}

module.exports = nextConfig
