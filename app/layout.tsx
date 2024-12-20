import "styles/tw.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { type ReactNode, Suspense } from "react";

import { Footer } from "components/footer";
import { Loader } from "components/loader";
import { Navbar } from "components/navbar";

import { baseUrl } from "lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
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