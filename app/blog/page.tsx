import { formatDate, mapper } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

import { Header } from "@/_components/header";
import { Spotlight } from "@/_components/spotlight";
import { Title } from "@/_components/title";
import { Card } from "@/_components/ui/card";
import { Container } from "@/_components/ui/container";
import { baseUrl } from "@/_lib/config";

const recentPosts = getPosts("blog");

export const metadata = {
  metadataBase: new URL(`${baseUrl}/blog`),
  title: "Blog | Christian B. Martinez",
  description: "Posts on web development",
};

export default function Page() {
	if (!recentPosts) return null;
	return (
		<>
			<Header title="Blog" description="Everything web development" />
			<Container>
				<Title>Blog</Title>
				{mapper(recentPosts, (post) => (
					<Spotlight key={post.slug}>
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
			</Container>
		</>
	);
}
