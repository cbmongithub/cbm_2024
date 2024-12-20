"use client";

import Link from "next/link";

import { Button } from "ui/button";
import { ArrowLeftIcon } from "ui/icons";
import { Container } from "ui/container";

export default function Page() {

  const handleClick = () => {
    const element = document.createElement("a");

    const file = new Blob([document.documentElement.outerHTML], {
      type: "text/html",
    });

    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <>
  <Container>
        <Button
          asChild={true}
          variant="secondary"
        >
          <ArrowLeftIcon className="size-4 transition stroke-neutral-500 group-hover:stroke-neutral-400" />
        </Button>
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto rounded-md p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Christian B. Martinez</h1>
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
            Versatile software engineer with expertise in full stack development, React, and modern technologies. Passionate about building scalable solutions and continuously learning cutting-edge tools.
          </p>
        </section>

        <section className="mb-6" aria-labelledby="technologies-heading">
          <h2 id="technologies-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">
            Technologies and Languages
          </h2>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Languages: JavaScript, TypeScript, Liquid, SQL, NoSQL</li>
            <li>Technologies: React, Next.js, Node.js, Tailwind CSS, MongoDB</li>
            <li>Tools: Git, Visual Studio Code, MongoDB Compass, Slack</li>
          </ul>
        </section>

        <section className="mb-6" aria-labelledby="work-experience-heading">
          <h2 id="work-experience-heading" className="text-lg font-semibold border-b border-neutral-800 pb-1">Work Experience</h2>
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
                <li>edX Prompt Engineering/ChatGPT <Link className="text-blue-400 hover:underline" href="https://www.credly.com/badges/dc32db26-4653-498e-b3b2-20e2faa9076c">Certification</Link></li>
                <li>edX Business Applications & ChatGPT<Link className="text-blue-400 hover:underline" href="https://www.credly.com/badges/dc32db26-4653-498e-b3b2-20e2faa9076c">Certification</Link></li>
          </ul>
        </section>
      </div>
    </div>
  </Container>
      <div className="flex justify-center mt-6">
        <Button
          onClick={handleClick}
        >
          Download
        </Button>
      </div>
</>
  );
}