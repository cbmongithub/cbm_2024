import { baseUrl } from "@/_lib/config";
import { getBlogPostsCache } from "@/_lib/posts";

export default async function sitemap() {
	const blogs = getBlogPostsCache().map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	const routes = ["", "/blog"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
