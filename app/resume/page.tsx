import Link from "next/link";

import { Button } from "ui/button";
import { ArrowLeftIcon } from "ui/icons";
import { Container } from "ui/container";

export default function Page() {
  return (
    <>
  <Container>
    <Link href="/about">
        <Button
          asChild={true}
          variant="tertiary"
        >
          <ArrowLeftIcon className="size-12 transition stroke-neutral-500 group-hover:stroke-neutral-400" />
        </Button>
        </Link>
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto rounded-md p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Christian B. Martinez</h1>
          <p className="text-sm text-neutral-400">Software Engineer | Full Stack Developer</p>
          <nav aria-label="Social links">
            <ul className="flex space-x-2 text-sm">
              <li>
                <Link href="https://www.linkedin.com/in/cbmonlinkedn" className="text-blue-400 hover:underline">
                  @cbmonlinkedn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/cbmongithub" className="text-blue-400 hover:underline">
                  @cbmongithub
                </Link>
              </li>
              <li>
                <Link href="https://x.com/cbmonx" className="text-blue-400 hover:underline">
                  @cbmonx
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="mb-6" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Summary</h2>
          <p className="text-sm mt-2">
          Passionate web developer with 6 years of proficiency in web technologies. I have a proven ability to lead teams, help and mentor developers, and deliver innovative solutions that drive business success.</p>
        </section>

        <section className="mb-6" aria-labelledby="technologies-heading">
          <h2 id="technologies-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">
            Technologies and Languages
          </h2>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Languages: CSS, HTML, JS, NoSQL, Sass, SQL, TS, TSX, Jquery</li>
            <li>Technologies: Bootstrap, Next, Node, React, Sanity, Solid, Tailwind, Vite, MySQL, MongoDB</li>
            <li>TTools: Bun, Git, Github, Pnpm,  Postman, VSCode, MongoDB Compass, Slack, Vitest, Jest</li>
            <li>Platforms: Heroku, Vercel, GCP,  Netlify, Wavoto, Hostinger, Wix, Wordpress, Shopify</li>
          </ul>
        </section>

        <section className="mb-6" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Skills</h2>
          <div className="mt-4">
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Technical Skills</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Problem Solving: Quick and effective at identifying and resolving challenges.</li>
                <li>Critical Thinking: Analyzes complex problems and develops strategic solutions.</li>
                <li>Attention to Detail: Ensures accuracy and quality in all technical work.</li>
              </ul>
            </article>
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Soft Skills</h3>
                <ul className="list-disc list-inside text-sm mt-2">
                <li>Collaboration: Works seamlessly with diverse teams and stakeholders.</li>
                <li>Empathy: Understanding, relating, and addressing the customers needs.</li>
                <li>Self-Motivated: Proactively tackles tasks and drives personal growth.</li>
                </ul>
            </article>
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Organizational Skills</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Time Management: Balances priorities and consistently meets deadlines.</li>
                <li>Creativity: Generates innovative ideas to improve workflows and solve problems.</li>
                <li>Mentoring: Explains technical concepts clearly and supports team development.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mb-6" aria-labelledby="work-experience-heading">
          <h2 id="work-experience-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Experience</h2>
          <div className="mt-4">
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Technician</h3>
              <p className="text-xs text-neutral-500">
                Northrop Grumman | Summer 2022 - Present
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Diagnosed and resolved issues in legacy computer applications.</li>
                <li>Operated Airbus computer systems ensuring quality and consistency.</li>
                <li>Collaborated with engineers to provide feedback on software improvements.</li>
              </ul>
            </article>
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Web Developer</h3>
              <p className="text-xs text-neutral-500">
                MMBC, LLC | Fall 2020 - Present
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Developed a high-performance single-page application using React and Tailwind CSS.</li>
                <li>Increased website inquiries from 2% to 18% month over month.</li>
                <li>Deployed solutions with 99.9% uptime using Google Cloud.</li>
              </ul>
            </article>
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Chief Technology Officer</h3>
              <p className="text-xs text-neutral-500">
                Mixdlabs, LLC | Summer 2015 - 2020
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Optimized page speeds and SEO, increasing organic traffic by 36%.</li>
                <li>Built a wholesale portal leading to a $140,000 revenue boost.</li>
                <li>Led a team of four employees, showcasing strong leadership skills.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mb-6" aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Education</h2>
          <div className="mt-4">
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Full Stack Coding Bootcamp</h3>
              <p className="text-xs text-neutral-500">
                University of Utah | Summer 2023 - Autumn 2023
              </p>
              <p className="text-sm mt-2">
                Advanced coursework in React, MongoDB, GraphQL, JWT, and Redux.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-6" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Projects</h2>
          <div className="mt-4">
            <article className="mb-4">
              <h3 className="font-semibold text-sm">CBM_2023</h3>
              <p className="text-xs text-neutral-500">2023</p>
              <p className="text-sm mt-2">Portfolio website built with Next.js, Tailwind CSS, and Framer Motion.</p>
            </article>
            <article className="mb-4">
              <h3 className="font-semibold text-sm">Chattr App</h3>
              <p className="text-xs text-neutral-500">2023</p>
              <p className="text-sm mt-2">Real-time chat app using React, Node, and Socket.io.</p>
            </article>
          </div>
        </section>

        <section className="mb-6" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Certifications</h2>
          <ul className="list-disc list-inside text-sm mt-2">
                <li>University of Utah - Full Stack <Link className="text-blue-400 hover:underline" href="https://www.credly.com/badges/dc32db26-4653-498e-b3b2-20e2faa9076c">Certification</Link></li>
                <li>edX Prompt Engineering/ChatGPT <Link className="text-blue-400 hover:underline" href="https://courses.edx.org/certificates/f7da1ede8b6e44e9994a32a479b236df">Certification</Link></li>
                <li>edX Business Applications & ChatGPT <Link className="text-blue-400 hover:underline" href="https://courses.edx.org/certificates/75fda987fd4447b2bafbcebbdab538f2">Certification</Link></li>
          </ul>
        </section>
      </div>
      <Link href="https://docs.google.com/document/d/1ktymEmZqpK7NLJwil6frgFrcxnwPHd7WOTJvGRLJa90/edit?usp=drive_link">
        <Button variant="link">
          Download
        </Button>
        </Link>
    </div>
  </Container>
</>
  );
}