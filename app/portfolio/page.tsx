import { Card } from "@/_components/card";
import { Header } from "@/_components/header";
import { PortfolioCard } from "@/_components/portfolio-card";
import { portfolioData } from "@/_lib/config";

export const metadata = {
	title: "Portfolio | Christian B. Martinez",
	description:
		"I have built many projects over the years, but these ones I liked the most",
};

export default function PortfolioPage() {
	return (
		<>
			<Header
				title="Portfolio"
				description="I have built many projects over the years, but these ones I liked the most"
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
									{portfolioData.map(
										({ title, imgUrl, alt, description, repo, tags }) => (
											<Card key={title}>
												<PortfolioCard
													key={title}
													href={repo}
													imgUrl={imgUrl}
													alt={alt}
													title={title}
													description={description}
													tags={JSON.stringify(tags)}
													date={JSON.stringify(tags)}
												/>
											</Card>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
