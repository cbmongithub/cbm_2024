import { Mdx } from "@/_components/mdx";
import { BackButton } from "@/_components/ui/back-button";
import { baseUrl } from "@/_lib/config";
import { formatDate } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";
import { notFound } from "next/navigation";

const projects = getPosts("projects");

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata(props) {
	const params = await props.params;
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) return notFound();

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = project.metadata;
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
			url: `${baseUrl}/portfolio/${project.slug}`,
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
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) return notFound();

	return (
		<>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed here
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: project.metadata.title,
						datePublished: project.metadata.publishedAt,
						dateModified: project.metadata.publishedAt,
						description: project.metadata.summary,
						image: project.metadata.image
							? `${baseUrl}${project.metadata.image}`
							: `/og?title=${encodeURIComponent(project.metadata.title)}`,
						url: `${baseUrl}/blog/${project.slug}`,
						author: {
							"@type": "Person",
							name: "Christian B. Martinez",
						},
					}),
				}}
			/>
			<BackButton href="/portfolio" />
			<h1 className="title font-semibold text-2xl tracking-tighter">
				{project.metadata.title}
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{formatDate(project.metadata.publishedAt)}
				</p>
			</div>
			<article className="prose">
				<Mdx source={project.content} />
			</article>
		</>
	);
}
