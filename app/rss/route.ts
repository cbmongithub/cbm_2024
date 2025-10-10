import { baseUrl, site } from "lib/config";
import { getPosts } from "lib/posts";
import type { MetadataWithSlug } from "types";

const fallbackBaseUrl = site.url;
const rssBaseUrl = baseUrl ?? fallbackBaseUrl;

export const GET = () => {
  const allBlogs = getPosts();

  const itemsXml = allBlogs
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map(
      ({ slug, metadata: { title, publishedAt, summary } }: MetadataWithSlug) =>
        `<item>
          <title>${title}</title>
          <link>${rssBaseUrl}/blog/${slug}</link>
          <description>${summary || "Recent blog post by Christian B. Martinez"}</description>
          <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
        </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Blog</title>
        <link>${rssBaseUrl}</link>
        <description>Welcome to my blog RSS feed! I hope you find some value here.</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=60",
    },
  });
};
