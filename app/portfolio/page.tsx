import type { Metadata } from "next";

import { baseUrl } from "lib/config";

import { projectData } from "content/projects/data";

import { Header } from "components/header";
import { Spotlight } from "components/spotlight";
import { Title } from "components/title";

import { CardImg } from "ui/card";
import { Container } from "ui/container";

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

const Page = () => {
  return (
    <>
      <Header title="Portfolio" description="Some of my favorite projects" />
      <Container>
        <Title>Projects</Title>
        {projectData.map((project) => (
          <Spotlight key={project.title} className="mb-4 h-auto sm:h-48 w-full">
            <CardImg
              key={project.title}
              imgSrc={project.imgUrl}
              imgAlt={project.alt}
              content="project"
              contentUrl={project.href}
              repoUrl={project.repo}
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

export default Page;
