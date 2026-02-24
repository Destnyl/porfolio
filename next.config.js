/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
