import { getBlogPostsCache } from "@/_lib/utils/posts";
import { Article } from "../_components/article";
import { Card } from "../_components/card";
import { Header } from "../_components/header";

export const metadata = {
	title: "Blog | Christian B. Martinez",
	description: `I write about software development, design, and other things I find interesting. For me,
  writing is a way to reflect on my thoughts and share them with others. I hope you find something useful here.`,
};

export default function Page() {
	const recentPosts = getBlogPostsCache();
	if (!recentPosts) return null;
	return (
		<>
			<Header
				title="Blog"
				description="Welcome to my blog RSS feed! I hope you find some value here."
				imgSrc="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
			/>
			<div className="mx-auto max-w-2xl py-16 sm:px-8 md:pt-28">
				<div className="w-full lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="grid grid-cols-1 gap-y-20">
							<div className="flex flex-col gap-16">
								<div className="py-16">
									{recentPosts.map((post) => (
										<Card key={post.slug}>
											<Article
												key={post.slug}
												href={`/blog/${post.slug}`}
												title={post.metadata.title}
												dateTime={post.metadata.publishedAt}
												date={post.metadata.publishedAt}
												description={post.metadata.summary}
											/>
										</Card>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
