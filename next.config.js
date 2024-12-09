/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
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