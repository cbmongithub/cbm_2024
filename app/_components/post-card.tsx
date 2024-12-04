import { formatDate } from "@/_lib/utils/helpers";
import { getBlogPostsCache } from "@/_lib/utils/posts";
import Link from "next/link";

export function PostCard() {
	const allBlogs = getBlogPostsCache();
	return (
		allBlogs.map((post) => (

					<Link
						key={post.slug}
						className="flex flex-col space-y-1 mb-4"
						href={`/blog/${post.slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
							<p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
								{formatDate(post.metadata.publishedAt, false)}
							</p>
							<p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
								{post.metadata.title}
							</p>
						</div>
					</Link>

	))
	);
}
