/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-v1" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-v1/" : "",
  images: {
    unoptimized: true, // GitHub Pages can't run Next's image optimization server
  },
  trailingSlash: true, // avoids 404s on nested routes when served as static files
};

module.exports = nextConfig;
