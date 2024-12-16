import type { MetadataWithSlug } from "@/_types";

import { baseUrl } from "@/_lib/config";

import Header from "./header";
import Mdx from "./mdx";
import Share from "./share";

export default function EmailTemplate(post: MetadataWithSlug) {
  return (
    <div className="bg-black prose w-full">
      <Header
        title={post.metadata.title}
        description={post.metadata.summary}
        date={post.metadata.publishedAt}
      />
      <Mdx source={post.content} />
      <h2 className="text-md text-white">Share</h2>
      <Share
        className="mt-6"
        title={post.metadata.title}
        description={post.metadata.summary}
        url={`${baseUrl}/blog/${post.slug}`}
      />
    </div>
  );
}