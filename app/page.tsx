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
    <Header title="I'm Christian" description='I code apps and tools' />
    <section aria-label='Blog Section'>
      <Title text='Blog' />
      <Posts />
      <Link href='/blog'>
        <Button
          className='flex flex-row justify-center items-center mx-auto'
          aria-label='View Blog'
        >
          View Blog
        </Button>
      </Link>
    </section>
    <section>
      <Title text='Repos' />
      <Repos />
    </section>
    <section>
      <Title text='Sign Up' />
      <Spotlight>
        <SignUpForm />
      </Spotlight>
    </section>
  </>
)
}