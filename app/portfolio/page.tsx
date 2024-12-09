import type { Metadata } from "next";

import { baseUrl } from "@/_lib/config";
import { formatDate, mapper } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

import { Header } from "@/_components/header";
import { CardAlt } from "@/_components/ui/card-alt";
import { Container } from "@/_components/ui/container";

export const metadata: Metadata = {
	metadataBase: new URL(`${baseUrl}/portfolio`),
	title: {
		default: "Portfolio | Christian B. Martinez",
		template: "%s | Christian B. Martinez",
	},
	description: "Some of my favorite projects I've built",
	openGraph: {
		title: "Portfolio | Christian B. Martinez",
		description: "Some of my favorite projects I've built",
		url: `${baseUrl}/portfolio`,
		siteName: "christianbmartinez.com",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};
const recentProjects = getPosts("projects");

export default function Page() {
	if (!recentProjects) return null;
	return (
		<>
			<Header title="Portfolio" description="Some of my favorite projects" />
			<Container>
				<h1 className="mt-32 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
					Projects
				</h1>
				{mapper(recentProjects, (post) => (
					<CardAlt
						key={post.slug}
						content="project"
						contentUrl={`/portfolio/${post.slug}`}
						title={post.metadata.title}
						date={formatDate(post.metadata.publishedAt)}
						description={post.metadata.summary}
						imgSrc={post.metadata.image as string}
						imgAlt={post.metadata.imageAlt as string}
					/>
				))}
			</Container>
		</>
	);
}
