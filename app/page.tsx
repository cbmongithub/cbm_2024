import { getPosts } from "./_lib/posts";

import Header from "./_components/header";
import { Posts } from "./_components/posts";
import Repos from "./_components/repos";
import SignUpForm from "./_components/signup-form";
import Spotlight from "./_components/spotlight";
import Title from "./_components/title";
import ButtonAlt from "./_components/ui/button-alt";

export default function Page() {
	const recentPosts = getPosts();

	if (!recentPosts) {
  return null;
}

	return (
  <>
    <Header title="I'm Christian" description="I code apps and tools" />
    <Title>Blog</Title>
    <Posts />
    <ButtonAlt href="/blog" content="blog" />
    <Title>Repos</Title>
    <Repos />
    <Title>Subscribe</Title>
    <Spotlight>
      <SignUpForm />
    </Spotlight>
  </>
);
}