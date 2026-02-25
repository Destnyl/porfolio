/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Disable built-in optimization for Netlify; serve files directly from /public
    unoptimized: true,
  },
};

module.exports = nextConfig;
