import Link from "next/link";

function ArrowIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="12"
			fill="none"
			viewBox="0 0 12 12"
		>
			<title>Arrow Icon</title>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Footer() {
	return (
		<footer className="mb-16 relative flex flex-col justify-center items-center w-full">
			<div className="font-sm mt-8 space-x-0 space-y-2 text-neutral-600 flex flex-col items-center md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<Link
					className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
					rel="noopener noreferrer"
					target="_blank"
					href="/rss"
				>
					<ArrowIcon />
					<p className="ml-2 h-7">rss</p>
				</Link>

				<Link
					className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/vercel/next.js"
				>
					<ArrowIcon />
					<p className="ml-2 h-7">github</p>
				</Link>

				<Link
					className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
					rel="noopener noreferrer"
					target="_blank"
					href="https://vercel.com/templates/next.js/portfolio-starter-kit"
				>
					<ArrowIcon />
					<p className="ml-2 h-7">view source</p>
				</Link>
				<p className="mt-16 text-neutral-600 dark:text-neutral-300">
					© {new Date().getFullYear()} Christian B. Martinez
				</p>
			</div>
		</footer>
	);
}
