import type { Metadata } from "next";

import { baseUrl } from "lib/config";


import { Header } from "components/header";
import { Title } from "components/title";
import { Projects } from "components/projects";

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
      <Header title='Portfolio' description='Some of my favorite projects' />
      <Container>
        <section>
          <Title text='Projects' />
          <Projects />
        </section>
      </Container>
    </>
  )
}

export default Page;
