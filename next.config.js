// next.config.js
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
