
import { getPosts } from "lib/posts";

import { Header } from "components/header";
import { Posts } from "components/posts";
import { Repos } from "components/repos";
import { SignUpForm } from "components/signup-form";
import { Spotlight } from "components/spotlight";
import { Title } from "components/title";

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