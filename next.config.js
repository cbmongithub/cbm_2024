/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
};

export default config;