import "styles/tw.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { type ReactNode, Suspense } from "react";

import { Footer } from "components/footer";
import { Loader } from "components/loader";
import { Navbar } from "components/navbar";

import { site } from "lib/config";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s - ${site.name}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: [
    "Next.js v15",
    "Next.js 15 template",
    "Tailwind CSS v4",
    "Tailwind v4 template",
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className="flex size-full flex-col scroll-smooth antialiased text-neutral-100 bg-black"
    >
      <body>
        <main className="mx-auto flex flex-col px-6 max-w-3xl">
          <Suspense fallback={<div>Loading...</div>}>
            <Loader>
              <Navbar />
              {children}
              <Footer />
            </Loader>
          </Suspense>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}