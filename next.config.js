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
      {
        protocol: "https",
        hostname: "ibb.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Added Cloudinary
      },
    ],
  },
};

module.exports = nextConfig;
