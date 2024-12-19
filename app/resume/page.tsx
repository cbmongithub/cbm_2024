import type { Metadata } from "next";

import Header from "@/_components/header";
import Title from "@/_components/title";
import Container from "@/_components/ui/container";
import {baseUrl} from "@/_lib/config";
import Link from "next/link";

export const metadata: Metadata = {
    metadataBase: new URL(`${baseUrl}/resume`),
    title: "Resume",
    description: "Welcome to my Resume. I am currently open to new opportunities! Feel free to contact me any time.",
    openGraph: {
      title: "Resume",
      description: "Welcome to my Resume. I am currently open to new opportunities! Feel free to contact me any time.",
      url: `${baseUrl}/resume`,
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
      <Header title="Resume" description="Open to new opportunities" />
      <Container>
        <Title>CV</Title>
        <div className="min-h-screen">
            <div className="max-w-3xl mx-auto rounded-md p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-sm text-neutral-400">Software Engineer | Full Stack Developer</p>
                <nav aria-label="Social links">
                <ul className="flex space-x-2 text-sm">
                    <li>
                    <Link href="https://www.linkedin.com/in/cbmonlinkedn" className="text-blue-400 hover:underline">
                        LinkedIn
                    </Link>
                    </li>
                    <li>
                    <Link href="https://github.com/cbmongithub" className="text-blue-400 hover:underline">
                        GitHub
                    </Link>
                    </li>
                    <li>
                    <Link href="https://x.com/cbmonx" className="text-blue-400 hover:underline">
                        X
                    </Link>
                    </li>
                </ul>
                </nav>
            </header>

            <section className="mb-6" aria-labelledby="summary-heading">
                <h2 id="summary-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Summary</h2>
                <p className="text-sm mt-2">
                Experienced software engineer with a strong background in full stack development. Skilled in building scalable web applications and working with modern technologies.
                </p>
            </section>

            <section className="mb-6" aria-labelledby="technologies-heading">
                <h2 id="technologies-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">
                Technologies and Languages
                </h2>
                <ul className="list-disc list-inside text-sm mt-2">
                <li>Languages: JavaScript, TypeScript, Python</li>
                <li>Technologies: React, Node.js, Express, MongoDB</li>
                </ul>
            </section>

            <section className="mb-6" aria-labelledby="work-experience-heading">
                <h2 id="work-experience-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Work Experience</h2>
                <div className="mt-4">
                <article className="mb-4">
                    <h3 className="font-semibold text-sm">Senior Software Engineer</h3>
                    <p className="text-xs text-neutral-500">
                    Tech Company Inc. | New York, NY | Jan 2020 - Present
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2">
                    <li>Led the development of a high-traffic web application using React and Node.js.</li>
                    <li>Implemented RESTful APIs and integrated third-party services.</li>
                    <li>Mentored junior developers and conducted code reviews.</li>
                    </ul>
                </article>
                <article className="mb-4">
                    <h3 className="font-semibold text-sm">Software Engineer</h3>
                    <p className="text-xs text-neutral-500">
                    Another Tech Company | San Francisco, CA | Jun 2017 - Dec 2019
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2">
                    <li>Developed and maintained web applications using Angular and Node.js.</li>
                    <li>Collaborated with cross-functional teams to define and implement new features.</li>
                    <li>Optimized application performance and improved user experience.</li>
                    </ul>
                </article>
                </div>
            </section>

            <section className="mb-6" aria-labelledby="education-heading">
                <h2 id="education-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Education</h2>
                <div className="mt-4">
                <article className="mb-4">
                    <h3 className="font-semibold text-sm">Bachelor of Science in Computer Science</h3>
                    <p className="text-xs text-neutral-500">
                    University of Technology | City, State | Sep 2013 - May 2017
                    </p>
                    <p className="text-sm mt-2">Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development.</p>
                </article>
                </div>
            </section>

            <section className="mb-6" aria-labelledby="projects-heading">
                <h2 id="projects-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Projects</h2>
                <div className="mt-4">
                <article className="mb-4">
                    <h3 className="font-semibold text-sm">Project Management Tool</h3>
                    <p className="text-xs text-neutral-500">Jan 2021 - Present</p>
                    <p className="text-sm mt-2">Developed a project management tool using React and Node.js. Implemented features such as task tracking, team collaboration, and reporting.</p>
                </article>
                <article className="mb-4">
                    <h3 className="font-semibold text-sm">E-commerce Platform</h3>
                    <p className="text-xs text-neutral-500">Mar 2019 - Dec 2020</p>
                    <p className="text-sm mt-2">Built an e-commerce platform using Angular and Express. Integrated payment gateways, product management, and order processing.</p>
                </article>
                </div>
            </section>
            </div>
            </div>
            </Container>
    </>
  );
}