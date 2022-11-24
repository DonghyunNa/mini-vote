/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://vote.quesdev.com/api/:path*`,
      },
      {
        source: '/image/:path*',
        destination: `http://vote.quesdev.com/image/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
