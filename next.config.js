/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
