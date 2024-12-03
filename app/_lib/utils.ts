import fs from "fs";
import path from "path";
import { unstable_cache } from "next/cache";
import { baseUrl } from "@/sitemap";
import { notFound } from "next/navigation";

export function cx(...classNames: (string | boolean | undefined)[]) {
	return classNames.filter(Boolean).join(" ");
}

export function formatDate(date: string, includeRelative = false) {
	const currentDate = new Date();
	const targetDate = new Date(date);
	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
	const daysAgo = currentDate.getDate() - targetDate.getDate();

	let formattedDate = "";

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`;
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`;
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`;
	} else {
		formattedDate = "Today";
	}

	const fullDate = targetDate.toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	if (!includeRelative) {
		return fullDate;
	}

	return `${fullDate} (${formattedDate})`;
}

export type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	image?: string;
};

export type MetadataWithSlug = {
	metadata: Metadata;
	slug: string;
	content: string;
};

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);
	const frontMatterBlock = match?.[1];
	const content = fileContent.replace(frontmatterRegex, "").trim();
	const frontMatterLines = frontMatterBlock?.trim().split("\n") || [];
	const metadata: Partial<Metadata> = {};

	frontMatterLines.forEach((line) => {
		const [key, ...valueArr] = line.split(": ");
		let value = valueArr.join(": ").trim();
		value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
		metadata[key.trim() as keyof Metadata] = value;
	});

	return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
	const rawContent = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
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

export function getBlogPosts() {
	return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export async function getAllPosts() {
	// The `fetch` function is automatically memoized and the result
	// is cached
	const res = await fetch(`${baseUrl}/api/posts`);

	if (res.status === 404) {
		return notFound();
	}

	return res.json()
  }

  async function getPostBySlug({slug}: {slug: string}) {
	// The `fetch` function is automatically memoized and the result
	// is cached
	const res = await fetch(`${baseUrl}/api/posts/${slug}`);

	if (res.status === 404) {
	  return notFound();
	}

	return res.json()
  }

