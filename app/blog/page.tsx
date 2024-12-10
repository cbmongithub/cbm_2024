import type { Metadata } from "next";

import { baseUrl } from "@/_lib/config";

import { Header } from "@/_components/header";
import { Posts } from "@/_components/posts";
import { Title } from "@/_components/title";
import { Container } from "@/_components/ui/container";

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

export default function Page() {
  return (
    <>
      <Header title="Blog" description="Everything web development" />
      <Container>
        <Title>Blog</Title>
        <Posts />
      </Container>
    </>
  );
}
