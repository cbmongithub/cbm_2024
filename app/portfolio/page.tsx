import type { Metadata } from "next";

import { baseUrl } from "@/_lib/config";

import Header from "@/_components/header";
import Title from "@/_components/title";
import CardImg from "@/_components/ui/card-img";
import Container from "@/_components/ui/container";

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
        <CardImg
          title="Project Title"
          imgSrc="https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          imgAlt="Project Image"
          date="2024-01-01"
          description="Project Description"
          content="Project Content"
          contentUrl="/path/to/content"
        />
      </Container>
    </>
  );
}
