import { getBlogPostsCache } from "@/_lib/posts";
import { Article } from "./_components/article";
import { Card } from "./_components/card";
import { Header } from "./_components/header";
import { SignUpForm } from "./_components/signup-form";
import { WorkHistory } from "./_components/work-history";

export default function Page() {
	const recentPosts = getBlogPostsCache();
	if (!recentPosts) return null;
	return (
		<section>
			<Header
				title="Hello world"
				description="Welcome! I'm Christian, I build apps and tools for the web."
				imgSrc="https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
			/>
			<div className="mx-auto max-w-2xl">
				<div className="w-full">
					<div className="relative">
						<div className="grid grid-cols-1 gap-y-20">
							<div className="flex flex-col">
								<h1 className="mt-32 text-3xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
									Blog
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
									<h1 className="mt-32 text-3xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
										Newsletter
									</h1>
									<Card>
										<SignUpForm />
									</Card>
									<h1 className="mt-32 text-3xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
										Employment
									</h1>
									<Card height="h-96">
										<WorkHistory />
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
