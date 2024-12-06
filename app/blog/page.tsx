import { Header } from "@/_components/header";
import { Spotlight } from "@/_components/spotlight";
import { Card } from "@/_components/ui/card";
import { formatDate, mapper } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

const recentPosts = getPosts("blog");

export const metadata = {
	title: "Blog | Christian B. Martinez",
	description: "Posts on web development",
};

export default function Page() {
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
									{mapper(recentPosts, (post) => (
										<Spotlight key={post.slug}>
											<Card
												key={post.slug}
												content="project"
												contentUrl={`/blog/${post.slug}`}
												title={post.metadata.title}
												date={formatDate(post.metadata.publishedAt)}
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
