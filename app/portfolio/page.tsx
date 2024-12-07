import { Header } from "@/_components/header";
import { CardAlt } from "@/_components/ui/card-alt";
import { formatDate, mapper } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

const recentProjects = getPosts("projects");

export const metadata = {
	title: "Portfolio | Christian B. Martinez",
	description: "Some of my favorite projects",
};

export default function Page() {
	if (!recentProjects) return null;
	return (
		<>
			<Header title="Portfolio" description="Some of my favorite projects" />
			<div className="w-full">
				<div className="relative">
					<div className="flex flex-col">
						<h1 className="mt-32 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
							Projects
						</h1>
						<div className="pb-10">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
