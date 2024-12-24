import type { Metadata } from "next";

import { baseUrl } from "lib/config";

import { Header } from "components/header";
import { Posts } from "components/posts";
import { Title } from "components/title";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/blog`),
  title: "Blog",
  description: "Welcome to my blog! I hope you find some value here.",
  openGraph: {
    title: "Blog",
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

const Page = () => {
  return (
    <>
      <Header title="Blog" description="Everything web development" />
      <section>
      <Title>Posts</Title>
      <Posts />
      </section>
    </>
  );
}

export default Page;
