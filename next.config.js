/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_GOOGLE_LOGIN_URL: process.env.GOOGLE_LOGIN_URL,
    NEXT_PUBLIC_WALLET_API_KEY: process.env.WALLET_API_KEY
  },
  images: {
    domains: [
      "test.com"
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/challenge?state=application",
        permanent: false
      },
    ]
  }
};

module.exports = nextConfig;
