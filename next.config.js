/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBIC_SERVER_BASE_URL: process.env.SERVER_BASE_URL
  }
}

module.exports = nextConfig
