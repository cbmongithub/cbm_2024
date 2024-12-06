import { baseUrl } from "@/_lib/config";
import type { Metadata } from "next";

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

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
