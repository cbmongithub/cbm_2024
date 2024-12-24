import type { Metadata } from "next";

import { baseUrl } from "lib/config";

import { Description } from "components/description";
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
			<Header title="About" description="A little about me" />
			<Container>
				<Title>Who</Title>
				<Description>
					Hey there, I&apos;m Christian, a dedicated Full Stack Web Developer
					from Utah. I am actively pursuing a full time role within the dynamic
					world of the tech industry.
				</Description>
				<Description>
					I recently completed coding bootcamp program at the University of
					Utah, where I honed my skills by successfully delivering a multitude
					of full stack projects.
				</Description>
				<Description>
					This hands-on experience, alongside my current role in freelance web
					development, has equipped me with a strong foundation in full stack
					web development. My passion for technology drives me to stay current
					with emerging trends and cutting-edge technologies, making me
					ever-ready to adapt and excel in this rapidly evolving field.
				</Description>
				<Description>
					In addition to my technical skills, I am a strong advocate for
					collaboration and continuous learning. I believe that the best
					solutions come from diverse perspectives and teamwork.
				</Description>
				<Description>
					When I'm not coding, you can find me exploring the great outdoors,
					reading up on the latest tech trends, or experimenting with new
					recipes in the kitchen. I am always open to connect with like-minded
					individuals and explore new opportunities in the tech world.
				</Description>
				<Title>When</Title>
				<Spotlight className="h-auto w-full">
					<WorkHistory />
				</Spotlight>
				<Title>Where</Title>
				<Socials />
			</Container>
		</>
	);
}

export default Page;