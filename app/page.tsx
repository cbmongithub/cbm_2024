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
      <Title>Blog</Title>
      <Posts />
      <Button>blog</Button>
      <Title>Repos</Title>
      <Repos />
      <Title>Subscribe</Title>
      <Spotlight>
        <SignUpForm />
      </Spotlight>
  </>
);
}