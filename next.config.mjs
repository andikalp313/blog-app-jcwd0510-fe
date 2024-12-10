/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gratistodo.com",
      },
      {
        protocol: "https",
        hostname: "https://images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
