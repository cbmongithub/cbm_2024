import { Code } from "bright";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";

function customTable({
	data,
}: { data: { headers: string[]; rows: string[][] } }) {
	const headers = data.headers.map((header, i) => (
		<th key={`th-${i + 1}`}>{header}</th>
	));
	const rows = data.rows.map((row, i) => (
		<tr key={`tr-${i + 1}`}>
			{row.map((cell, i) => (
				<td key={`cell-${i + 1}`}>{cell}</td>
			))}
		</tr>
	));

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
	children?: React.ReactNode;
};

function customLink({ href, children, ...props }: CustomLinkProps) {
	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function slugify(str: string) {
	return str
		.toLowerCase()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/&/g, "-and-")
		.replace(/[^\w\-]+/g, "")
		.replace(/--+/g, "-");
}

function createHeading(level: number) {
	const Heading = ({ children }: { children: string }) => {
		const slug = slugify(children);
		return createElement(
			`h${level}`,
			{ id: slug },
			[
				createElement("a", {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: "anchor",
				}),
			],
			children,
		);
	};

	Heading.displayName = `Heading${level}`;

	return Heading;
}

function customImage({ ...props }: React.ComponentProps<typeof Image>) {
	return <Image className="blur-md rounded-2xl" {...props} />;
}

export default function customCode({ children: code }) {
	return (
		<div data-theme="dark">
			<Code lang="ts">{code}</Code>
		</div>
	);
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	img: customImage,
	a: customLink,
	// https://bright.codehike.org
	pre: customCode,
	table: customTable,
};

export function Mdx(
	props: MDXRemoteProps & {
		components?: React.ComponentProps<React.ElementType>;
	},
) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}
