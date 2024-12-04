import { baseUrl } from "@/sitemap";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Blog | Christian B. Martinez | Full stack developer",
		template: "%s | Christian B. Martinez | Full stack developer",
	},
	description: "I build apps and tools for the web.",
	openGraph: {
		title: "Blog | Christian B. Martinez | Full stack developer",
		description: "I build apps and tools for the web.",
		url: baseUrl,
		siteName: "Christian B. Martinez | Full stack developer",
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

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`${GeistMono.variable} max-w-2xl mx-auto`}>{children}</div>
	);
}
