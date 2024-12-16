// TODO: Create tabs for each project, categorize U of U projects, personal projects, and freelance projects
import type { Metadata } from "next";

import { baseUrl } from "@/_lib/config";

import { projectData } from "@/_content/projects/data";

import Header from "@/_components/header";
import Spotlight from "@/_components/spotlight";
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
        {projectData.map((project) => (
          <Spotlight key={project.title} height="h-auto sm:h-48" width="w-full" margin="mb-4">
            <CardImg
              key={project.title}
              imgSrc={project.imgUrl}
              imgAlt={project.alt}
              content="project"
              contentUrl={project.repo}
              title={project.title}
              date={project.date}
              description={project.description}
            />
          </Spotlight>
        ))}
      </Container>
    </>
  );
}
