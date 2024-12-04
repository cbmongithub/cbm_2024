import "./global.css";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Christian B. Martinez | Full stack developer',
    template: '%s | Christian B. Martinez | Full stack developer',
  },
  description: 'I build apps and tools for the web.',
  openGraph: {
    title: 'Christian B. Martinez | Full stack developer',
    description: 'I build apps and tools for the web.',
    url: baseUrl,
    siteName: 'Christian B. Martinez | Full stack developer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
			<html
				lang="en"
				className={`${GeistSans.variable + GeistMono.variable} flex size-full flex-col scroll-smooth antialiased bg-white text-black dark:text-white dark:bg-black`}
			>
				<body>
					<main className="flex flex-col px-6">
						<div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#eeeeeeee_1px,transparent_1px),linear-gradient(to_bottom,#eeeeeeee_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3333333e_1px,transparent_1px),linear-gradient(to_bottom,#3333333e_1px,transparent_1px)] bg-[size:14px_24px]" />
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
