import Link from "next/link";

import { getPosts } from "lib/posts";

import { Header } from "components/header";
import { Posts } from "components/posts";
import { Repos } from "components/repos";
import { SignUpForm } from "components/signup-form";
import { Spotlight } from "components/spotlight";
import { Title } from "components/title";
import { Button } from "components/ui/button";

export default function Page() {
  const posts = getPosts();

  if (!posts) {
    return null;
  }

  return (
    <>
      <Header title="I'm Christian" description="I code apps and tools" />
      <section aria-label="Blog Section" className="mt-16 space-y-10">
        <Title text="Blog" />
        <Posts />
        <div className="flex justify-center">
          <Link href="/blog" aria-label="View Blog">
            <Button variant="ghost">View Blog</Button>
          </Link>
        </div>
      </section>
      <section aria-label="Repository Highlights" className="mt-20 space-y-10">
        <Title text="Repos" />
        <Repos />
        <div className="flex justify-center">
          <Link href="https://github.com/cbmongithub" aria-label="View Repos">
            <Button variant="ghost">View Repos</Button>
          </Link>
        </div>
      </section>
      <section aria-label="Newsletter Sign Up" className="mt-20 space-y-10">
        <Title text="Sign Up" />
        <Spotlight border={true} className="p-0">
          <SignUpForm />
        </Spotlight>
      </section>
    </>
  );
}
