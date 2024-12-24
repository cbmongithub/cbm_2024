import "styles/prose.css";

import { notFound } from "next/navigation";

import { baseUrl } from "lib/config";
import { getPosts } from "lib/posts"

import { Header } from "components/header";
import { Mdx } from "components/mdx";
import { Share } from "components/share";
import { ArrowLeftIcon } from "components/ui/icons";

import Link from "next/link";
import { Button } from "ui/button";

const posts = getPosts();

export const generateStaticParams = () => {
  return posts.map(({ slug }) => ({
    slug: slug,
	}));
}

export const generateMetadata = async (props: { params: {slug: string}; }) => {
  const params = await props.params;
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound()
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const Page = async (props: { params: {slug: string}; }) => {
  const params = await props.params;
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Christian B. Martinez",
            },
          }),
        }}
      />
      <Button
        asChild={true}
        variant="tertiary"
        aria-label="Back Button"
      >
        <Link aria-label="Back Button" href="/blog">
        <ArrowLeftIcon className="size-6" />
        </Link>
      </Button>
      <article aria-label="Article" className="prose">
        <Header
          title={post.metadata.title}
          description={post.metadata.summary}
          date={post.metadata.publishedAt}
        />
        <Mdx source={post.content} />
        <h2>Share</h2>
        <Share
          className="mt-6"
          title={post.metadata.title}
          description={post.metadata.summary}
          url={`${baseUrl}/blog/${post.slug}`}
        />
      </article>
    </section>
  );
}

export default Page;