/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: [
      "./../../packages/coop-core",
      "./../../packages/coop-draw",
    ],
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["korean"] } },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
