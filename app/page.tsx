import { getBlogPostsCache } from "@/_lib/posts";
import { Article } from "./_components/article-card";
import { Card } from "./_components/card";
import { Header } from "./_components/header";
import { SignUpForm } from "./_components/signup-form";
import { WorkHistory } from "./_components/work-history";

export default function Page() {
	const recentPosts = getBlogPostsCache();
	if (!recentPosts) return null;
	return (
		<>
			<Header
				title="Hello world"
				description="I'm Christian and I build apps and tools for the web"
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

								<div className="space-y-10">
									<h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
										Work
									</h1>
									<Card height="h-96">
										<WorkHistory />
									</Card>
									<h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
										Newsletter
									</h1>
									<Card>
										<SignUpForm />
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
