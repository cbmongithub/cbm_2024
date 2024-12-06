import Link from "next/link";

export function BackButton({ href }: { href: string }) {
	return (
		<Link href={href}>
			<button
				type="button"
				aria-label="Go back to articles"
				className="group cursor-pointer mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 transition dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0 dark:ring-white/10 dark:hover:border-neutral-700 dark:hover:ring-white/20"
			>
				<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-700 dark:stroke-neutral-500 dark:group-hover:stroke-neutral-400"
				>
					<path
						d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</Link>
	);
}
