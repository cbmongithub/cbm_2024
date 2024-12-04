"use client";

import Link from "next/link";

export function Article({
	title,
	dateTime,
	date,
	description,
	href,
}: {
	title: string;
	dateTime: string;
	date: string;
	description: string;
	href: string;
}) {
	return (
		<article className="group relative flex flex-col items-start">
			<h2 className="text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
				<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl" />
				<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
				<span className="relative z-10">{title}</span>
			</h2>
			<time
				className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-400 dark:text-neutral-500"
				dateTime={dateTime}
			>
				<span
					className="absolute inset-y-0 left-0 flex items-center"
					aria-hidden="true"
				>
					<span className="h-4 w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-500" />
				</span>
				{date}
			</time>
			<p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
				{description}
			</p>
			<Link
				href={href}
				aria-hidden="true"
				className="relative z-20 mt-4 flex items-center text-sm font-medium text-blue-500"
			>
				Read article
				<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					className="ml-1 h-4 w-4 stroke-current"
				>
					<path
						d="M6.75 5.75 9.25 8l-2.5 2.25"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</article>
	);
}
