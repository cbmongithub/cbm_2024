import { formatDate, mapper } from "@/_lib/helpers";
import { getPosts } from "@/_lib/posts";

import { Header } from "@/_components/header";
import { Spotlight } from "@/_components/spotlight";
import { Title } from "@/_components/title";
import { Card } from "@/_components/ui/card";
import { Container } from "@/_components/ui/container";
import { baseUrl } from "@/_lib/config";
import type { Metadata } from 'next';

const recentPosts = getPosts("blog");

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/blog`),
  title: 'Blog',
  description: 'Welcome to my blog! I hope you find some value here.',
  openGraph: {
    title: 'Blog',
    description: 'Welcome to my blog! I hope you find some value here.',
    url: `${baseUrl}/blog`,
    siteName: 'christianbmartinez.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
	if (!recentPosts) return null;
	return (
  <>
    <Header title="Blog" description="Everything web development" />
    <Container>
      <Title>Blog</Title>
      {mapper(recentPosts, (post) => (
        <Spotlight height="h-auto" key={post.slug}>
          <Card
            key={post.slug}
            content="article"
            contentUrl={`/blog/${post.slug}`}
            title={post.metadata.title}
            date={formatDate(post.metadata.publishedAt)}
            description={post.metadata.summary}
          />
        </Spotlight>
      ))}
    </Container>
  </>
);
}
