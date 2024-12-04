import { getBlogPostsCache } from "@/_lib/utils/posts";
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
			<div className="py-16 sm:px-8 md:pt-28">
				<div className="mx-auto w-full lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
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
								<div className="space-y-10 lg:pl-16 xl:pl-24">
									<Card>
										<SignUpForm />
									</Card>
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
