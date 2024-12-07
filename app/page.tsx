import { getPosts } from "@/_lib/posts";
import { Header } from "./_components/header";
import { SignUpForm } from "./_components/signup-form";
import { Spotlight } from "./_components/spotlight";
import { Card } from "./_components/ui/card";
import { View } from "./_components/ui/view-button";
import { WorkHistory } from "./_components/work-history";
import { formatDate, mapper } from "./_lib/helpers";

export default function Page() {
	const recentPosts = getPosts("blog");
	if (!recentPosts) return null;
	return (
		<>
			<Header title="I'm Christian" description="I code apps and tools" />
			<div className="mx-auto max-w-2xl">
				<div className="w-full">
					<div className="relative">
						<div className="grid grid-cols-1 pb-10">
							<div className="flex flex-col">
								<h1 className="mt-32 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Blog
								</h1>
								<div>
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
								</div>
								<View href="/blog" content="blog" />
								<h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Work
								</h1>
								<Spotlight height="h-96">
									<WorkHistory />
								</Spotlight>
								<h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Subscribe
								</h1>
								<Spotlight>
									<SignUpForm />
								</Spotlight>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
