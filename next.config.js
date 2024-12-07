/** @type {import('next').NextConfig} */
module.exports = {
	images: {
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
	transpilePackages: ["next-mdx-remote"],
};