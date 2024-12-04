import { Article } from "@/_components/article";
import { Card } from "@/_components/card";
import { Header } from "@/_components/header";
import { getBlogPostsCache } from "@/_lib/utils/posts";
import Link from "next/link";

export const metadata = {
	title: "Blog | Christian B. Martinez",
	description: `I write about software development, design, and other things I find interesting. For me,
  writing is a way to reflect on my thoughts and share them with others. I hope you find something useful here.`,
};

export default function Page() {
	const recentPosts = getBlogPostsCache();
	return (
		<section>
			<Header
				title="Hello world"
				description="This is a test"
				imgSrc="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
			/>
			<div className="py-16 sm:px-8 md:pt-28">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-20 lg:grid-cols-2">
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
									<Link
										href="/blog"
										aria-hidden="true"
										className="relative z-20 flex text-center items-center text-sm font-medium text-blue-500 hover:text-blue-600"
									>
										Go to article
										<svg
											viewBox="0 0 16 16"
											fill="none"
											aria-hidden="true"
											className="ml-1 h-4 w-4 stroke-current"
										>
											<path
												d="M6.75 5.75 9.25 8l-2.5 2.25"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
