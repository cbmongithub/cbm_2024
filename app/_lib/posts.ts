import fs from "node:fs";
import path from "node:path";

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

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);
	const frontMatterBlock = match?.[1];
	const content = fileContent.replace(frontmatterRegex, "").trim();
	const frontMatterLines = frontMatterBlock?.trim().split("\n") || [];
	const metadata: Partial<Metadata> = {};

	// biome-ignore lint/complexity/noForEach: node:path
	frontMatterLines.forEach((line) => {
		const [key, ...valueArr] = line.split(": ");
		let value = valueArr.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
		metadata[key.trim() as keyof Metadata] = value;
	});

	return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
	const rawContent = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
	const mdxFiles = getMDXFiles(dir);
	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file));
		const slug = path.basename(file, path.extname(file));
		return {
			metadata,
			slug,
			content,
		};
	});
}

export function getPosts(dir: string) {
	return getMDXData(path.join(process.cwd(), "app", "_posts", dir));
}

export const getBlogPostsCache = () => {
	const blogPosts = getPosts("blog");
	return blogPosts;
};

export const getProjectPostsCache = () => {
	const projectPosts = getPosts("projects");
	return projectPosts;
};