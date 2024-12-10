import { notFound } from "next/navigation";

import { baseUrl } from "@/_lib/config";
import { getPosts } from "@/_lib/posts";

import { Header } from "@/_components/header";
import { Mdx } from "@/_components/mdx";
import { Share } from "@/_components/share";
import { ButtonRound } from "@/_components/ui/buttons";

const posts = getPosts();

export function generateStaticParams() {
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata(props) {
    const params = await props.params;
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
      return notFound();
    }

    const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
    const ogImage = image
		? image
		: `${baseUrl}/og?title=${encodeURIComponent(title)}`;

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

export default async function Page(props) {
    const params = await props.params;
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
      return notFound();
    }

    return (
      <>
        <script
          type="application/ld+json"
          suppressHydrationWarning={true}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Needed here
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
        <ButtonRound href="/blog" />
        <article className="prose">
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
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`}
          />
        </article>
      </>
    );
}
