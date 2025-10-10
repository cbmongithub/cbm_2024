import { formatDate } from "lib/helpers";
import { getPosts } from "lib/posts";

import { Spotlight } from "components/spotlight";
import { Card } from "components/ui/card";

export const Posts = () => {
  const posts = getPosts();

  if (!posts) {
    return null;
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <>
      {sortedPosts.map((post) => (
        <Spotlight key={post.slug} className="h-auto mb-6">
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
};
