import { getPosts } from "@/_lib/posts";
import { formatDate, mapper } from "./_lib/helpers";

import { Header } from "./_components/header";
import { SignUpForm } from "./_components/signup-form";
import { Spotlight } from "./_components/spotlight";
import { Title } from "./_components/title";
import { Card } from "./_components/ui/card";
import { Container } from "./_components/ui/container";
import { ViewButton } from "./_components/ui/view-button";

export default function Page() {
	const recentPosts = getPosts("blog");

	if (!recentPosts) return null;

	return (
		<>
			<Header title="I'm Christian" description="I code apps and tools" />
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
			<ViewButton href="/blog" content="blog" />
			<Title>Subscribe</Title>
			<Spotlight>
				<SignUpForm />
			</Spotlight>
		</>
	);
}
