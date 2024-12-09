import type { Metadata } from "next";

import { baseUrl } from "@/_lib/config";

import { FilterPosts } from "@/_components/filter-posts";
import { Header } from "@/_components/header";
import { Title } from "@/_components/title";
import { Container } from "@/_components/ui/container";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/portfolio`),
  title: "Portfolio",
  description: "Welcome to my portfolio! I hope you find some value here.",
  openGraph: {
    title: "Portfolio",
    description: "Welcome to my portfolio! I hope you find some value here.",
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

export default function Page() {
  return (
    <>
      <Header title="Portfolio" description="Some of my favorite projects" />
      <Container>
        <Title>Projects</Title>
        <FilterPosts filter="projects" />
      </Container>
    </>
  );
}
