import { Article } from "@/_components/article-card";
import { Card } from "@/_components/card";
import { Header } from "@/_components/header";
import { getBlogPostsCache } from "@/_lib/posts";

export const metadata = {
	title: "Blog | Christian B. Martinez",
	description: "Welcome to my blog RSS feed! I hope you find some value here.",
};

export default function Page() {
	const recentPosts = getBlogPostsCache();
	if (!recentPosts) return null;
	return (
		<>
			<Header
				title="Blog"
				description="Welcome to my blog RSS feed! I hope you find some value here"
			/>
			<div className="mx-auto max-w-2xl">
				<div className="w-full">
					<div className="relative">
						<div className="grid grid-cols-1 gap-y-20">
							<div className="flex flex-col">
								<h1 className="mt-32 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Recent Posts
								</h1>
								<div className="pb-10">
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
