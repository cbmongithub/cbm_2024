import { Card } from "@/_components/card";
import { Header } from "@/_components/header";
import { Spotlight } from "@/_components/spotlight";
import { getBlogPostsCache } from "@/_lib/posts";

export const metadata = {
	title: "Blog | Christian B. Martinez",
	description: "Posts on web development",
};

export default function Page() {
	const recentPosts = getBlogPostsCache();
	if (!recentPosts) return null;
	return (
		<>
			<Header title="Blog" description="Everything web development" />
			<div className="mx-auto max-w-2xl">
				<div className="w-full">
					<div className="relative">
						<div className="grid grid-cols-1 gap-y-20">
							<div className="flex flex-col">
								<h1 className="mt-32 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Posts
								</h1>
								<div className="pb-10">
									{recentPosts.map((post) => (
										<Spotlight key={post.slug}>
											<Card
												content="post"
												contentUrl={`/blog/${post.slug}`}
												title={post.metadata.title}
												date={post.metadata.publishedAt}
												description={post.metadata.summary}
											/>
										</Spotlight>
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
