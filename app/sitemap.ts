import { getBlogPosts } from "@/_lib/utils/posts";

export const baseUrl =
	process.env.NODE_ENV === "development"
		? "https://christianbmartinez.com"
		: "http://localhost:3000";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
			url: `${baseUrl}/blog/${post.slug}`,
			lastModified: post.metadata.publishedAt,
		}))

  const routes = ["", "/blog"].map((route) => ({
			url: `${baseUrl}${route}`,
			lastModified: new Date().toISOString().split("T")[0],
		}))

  return [...routes, ...blogs]
}
