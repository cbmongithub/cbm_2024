import { getPosts } from "lib/posts";

import { Header } from "components/header";
import { Posts } from "components/posts";
import { Repos } from "components/repos";
import { SignUpForm } from "components/signup-form";
import { Spotlight } from "components/spotlight";
import { Title } from "components/title";
import { Button } from "components/ui/button";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  if (!posts) {
  return null;
}

	return (
  <>
      <Header title="I'm Christian" description="I code apps and tools" />
      <Title>Blog</Title>
      <Posts />
      <Link href="/blog">
        <Button className="flex flex-row justify-center items-center mx-auto">
          View Blog
        </Button>
      </Link>
      <Title>Repos</Title>
      <Repos />
      <Title>Subscribe</Title>
      <Spotlight>
        <SignUpForm />
      </Spotlight>
  </>
);
}