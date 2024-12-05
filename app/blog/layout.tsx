import { baseUrl } from "@/_lib/config";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(`${baseUrl}/blog`),
	title: {
		default: "Blog | Christian B. Martinez",
		template: "%s | Christian B. Martinez",
	},
	description: "Welcome to my blog! I hope you find some value here.",
	openGraph: {
		title: "Blog | Christian B. Martinez",
		description: "Welcome to my blog! I hope you find some value here.",
		url: `${baseUrl}/blog`,
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

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className={`${GeistMono.variable}`}>{children}</div>;
}
