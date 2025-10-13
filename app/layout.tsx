import "styles/tw.css";

import type { Metadata } from "next";
import { type ReactNode, Suspense } from "react";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "components/footer";
import { Loader } from "components/loader";
import { Navbar } from "components/navbar";

import { site } from "lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Christian B. Martinez",
    "Christian Martinez Full Stack Developer",
    "Christian B Martinez Full Stack",
    "Full Stack developer Utah",
    "Christian Full Stack Developer",
    "cbm full stack developer",
  ],
  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
    creator: site.handles.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="flex size-full flex-col scroll-smooth antialiased text-neutral-100 bg-neutral-950"
    >
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Loader>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </Loader>
        </Suspense>
      </body>
    </html>
  );
}
