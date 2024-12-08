import Link from "next/link";

import { ArrowLeftIcon } from "@/_components/ui/icons";

export function BackButton({ href }: { href: string }) {
	return (
		<Link
			href={href}
			className="group cursor-pointer mb-8 flex size-10 items-center justify-center rounded-full shadow-md shadow-neutral-900/5 ring-1 ring-neutral-900/5 transition dark:border dark:border-neutral-800/50 dark:bg-neutral-900 dark:ring-0 dark:ring-white/10 dark:hover:border-neutral-800 dark:hover:ring-white/20"
		>
			<ArrowLeftIcon className="size-4 stroke-neutral-500 transition group-hover:stroke-neutral-800 dark:stroke-neutral-500 dark:group-hover:stroke-neutral-400" />
		</Link>
	);
}
