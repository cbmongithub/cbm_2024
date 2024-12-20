import { baseUrl } from "lib/config";
import { getPosts } from "lib/posts";

export default async function sitemap() {
	const blogs = getPosts().map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: post.metadata.publishedAt,
}));

	const routes = ["", "/blog"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
