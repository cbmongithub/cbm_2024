/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: ["localhost", "images.unsplash.com", "gstatic.com", "pexels.com"],
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
