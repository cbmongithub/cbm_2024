import "./globals.css";

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { baseUrl } from "./_lib/config";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl as unknown as URL),
	title: {
		default: "Christian B. Martinez",
		template: "%s | Christian B. Martinez",
	},
	description: "I build apps and tools for the web.",
	openGraph: {
		title: "Christian B. Martinez",
		description: "I build apps and tools for the web.",
		url: baseUrl,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
			<html
				lang="en"
				className="flex size-full flex-col scroll-smooth antialiased bg-neutral-100 text-neutral-900 dark:text-neutral-100 dark:bg-black"
			>
				<body>
					<main className="mx-auto flex flex-col px-6 max-w-2xl">
						<Navbar />
						{children}
						<Footer />
						<Analytics />
						<SpeedInsights />
					</main>
				</body>
			</html>
		);
}
