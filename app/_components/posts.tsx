
import { formatDate } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

import Spotlight from "@/_components/spotlight";
import Card from "@/_components/ui/card";

export function Posts() {
  const posts = getPosts();

  if (!posts) {
    return null;
  }

  return (
    <>
      {posts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Spotlight height="h-auto" key={post.slug}>
            <Card
              key={post.slug}
              content="article"
              contentUrl={`/blog/${post.slug}`}
              title={post.metadata.title}
              date={formatDate(post.metadata.publishedAt)}
              description={post.metadata.summary}
            />
          </Spotlight>
        ))}
    </>
  );
}