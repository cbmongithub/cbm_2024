import { Code } from "bright";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
	const headers = data.headers.map((header, i) => (
		<th key={`th-${i}`}>{header}</th>
	));
	const rows = data.rows.map((row, i) => (
		<tr key={`tr-${i}`}>
			{row.map((cell, i) => (
				<td key={`cell-${i}`}>{cell}</td>
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

interface CustomLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children?: React.ReactNode;
}

function CustomLink({ href, children, ...props }: CustomLinkProps) {
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
		let slug = slugify(children);
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
const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	img: Image,
	a: CustomLink,
	// https://bright.codehike.org
	pre: Code,
	Table,
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
