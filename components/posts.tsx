

import { fd } from "lib/helpers";
import { getPosts } from "lib/posts";

import { Spotlight } from "components/spotlight";
import { Card } from "components/ui/card";

export const Posts = () => {
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
          <Spotlight key={post.slug} className="h-auto mb-6">
            <Card
              key={post.slug}
              content="article"
              contentUrl={`/blog/${post.slug}`}
              title={post.metadata.title}
              date={fd(post.metadata.publishedAt)}
              description={post.metadata.summary}
            />
          </Spotlight>
        ))}
        </>
  );
}