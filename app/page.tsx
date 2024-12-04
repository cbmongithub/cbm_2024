import Link from "next/link";
import { formatDate } from "@/_lib/utils/helpers";
import { getBlogPosts } from "@/_lib/utils/posts";

export default function Page() {
  const allPosts = getBlogPosts();
  return (
      <section>
      <h1 className="mb-8 text-xl font-semibold tracking-tighter">
        Under Construction 🚧
      </h1>
      <p className="mb-4">
        Hey, I'm Christian! This is my new site currently under construction.
        I'm a software engineer and I'm excited to share my projects and thoughts with you!
        Feel free to reach out to me on social media or by email at hello [at] christianbmartinez.com.
        Stay tuned!
      </p>
        <h2 className="mt-8 text-lg font-semibold tracking-tighter mb-4">
          Recent Posts
        </h2>
        {allPosts.map(({slug, metadata: { publishedAt, title }}) => (
					<Link
						key={slug}
						className="flex flex-col space-y-1 mb-4"
						href={`/blog/${slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
							<p className="mt-[0.1rem] text-xs md:text-sm md:mt-[0.2rem] text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
								{formatDate(publishedAt, false)}
							</p>
							<p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
								{title}
							</p>
						</div>
					</Link>

	      ))}
    </section>
  )
}
