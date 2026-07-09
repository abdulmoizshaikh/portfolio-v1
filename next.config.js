/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio-v1",
  assetPrefix: "/portfolio-v1/",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
