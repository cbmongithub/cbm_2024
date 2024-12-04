import { Mdx } from "@/_components/mdx";
import { formatDate } from "@/_lib/utils/helpers";
import { getBlogPostsCache } from "@/_lib/utils/posts";
import { baseUrl } from "@/sitemap";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	let posts = await getBlogPostsCache()

	return posts.map((post) => ({
	  slug: post.slug,
	}))
  }

export async function generateMetadata(props) {
    const params = await props.params;
    const post = await getBlogPostsCache().find((post) => post.slug === params.slug);

    if (!post) return notFound();

    const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
    const ogImage = image
		? image
		: `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Page(props) {
    const params = await props.params;
    let post = await getBlogPostsCache().find((post) => post.slug === params.slug)

    if (!post) return notFound();

    return (
		<section>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: "My Portfolio",
						},
					}),
				}}
			/>
			<h1 className="title font-semibold text-2xl tracking-tighter">
				{post.metadata.title}
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{formatDate(post.metadata.publishedAt)}
				</p>
			</div>
			<article className="prose">
				<Mdx source={post.content} />
			</article>
		</section>
	);
}
