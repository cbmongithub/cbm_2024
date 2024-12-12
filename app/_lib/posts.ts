// biome-ignore lint/correctness/noNodejsModules: <explanation>
import fs from "node:fs";
// biome-ignore lint/correctness/noNodejsModules: <explanation>
import path from "node:path";
import { cache } from "react";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

export type MetadataWithSlug = {
  slug: string;
  metadata: Metadata;
  content: string;
};
const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
const quotesRegex = /^['"](.*)['"]$/;

function parseFrontmatter(fileContent: string) {
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock?.trim().split("\n") || [];
  const metadata: Partial<Metadata> = {};

  // biome-ignore lint/complexity/noForEach: node:path
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(quotesRegex, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function readMdxFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMdxData(dir: string) {
  const mdxFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");

  return mdxFiles.map((file) => {
    const { metadata, content } = readMdxFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export const getPosts = cache(() => {
  const posts = getMdxData(path.join("app", "_content", "blog"));
  return posts;
});

