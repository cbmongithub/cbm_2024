import type { Metadata } from "next";
import Image from "next/image";

import { baseUrl } from "lib/config";

import { Header } from "components/header";
import { Socials } from "components/socials";
import { Spotlight } from "components/spotlight";
import { Title } from "components/title";
import { WorkHistory } from "components/work-history";

import { Container } from "ui/container";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/about`),
  title: 'About',
  description: 'A little about me',
  openGraph: {
    title: 'About',
    description: 'A little about me',
    url: `${baseUrl}/about`,
    siteName: 'christianbmartinez.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const Page = () => {
	return (
  <>
    <Header title='About' description='A little about me' />
    <Container>
      <Title text='Who' />
      <Image
        className='rounded-lg my-6'
        src='/img/me.webp'
        width={300}
        height={300}
        alt='Christian Martinez'
      />
      <p>
        I&apos;m Christian, a Full Stack Web Developer from Utah, seeking a
        full-time role in tech. <br />
        <br />
        With experience from the University of Utah’s coding bootcamp and
        freelance development, I’ve built a solid foundation in full-stack
        development and a passion for learning emerging technologies.
        <br />
        <br />I love working with others, always eager to learn new things, and
        enjoy coming up with creative solutions. <br />
        <br />
        Outside of work, I enjoy exploring the outdoors, keeping up with tech
        trends, and experimenting with new dishes in the kitchen.
      </p>
      <Title text='When' />
      <Spotlight className='h-auto w-full'>
        <WorkHistory />
      </Spotlight>
      <Title text='Where' />
      <Socials />
    </Container>
  </>
)
}

export default Page;