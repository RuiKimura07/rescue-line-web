/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['profile.line-scdn.net'],
  },
}

module.exports = nextConfig