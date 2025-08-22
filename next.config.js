/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true
  },
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig