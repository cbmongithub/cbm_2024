import { Description } from "@/_components/description";
import { Header } from "@/_components/header";
import { Socials } from "@/_components/socials";
import { Spotlight } from "@/_components/spotlight";
import { Title } from "@/_components/title";
import { Container } from "@/_components/ui/container";
import { WorkHistory } from "@/_components/work-history";

export default function About() {
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
				<Spotlight height="h-auto" width="w-full">
					<WorkHistory />
				</Spotlight>
				<Title>Where</Title>
				<Socials />
			</Container>
		</>
	);
}