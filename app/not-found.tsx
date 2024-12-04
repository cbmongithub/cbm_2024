import Link from "next/link";

export default function NotFound() {
  return (
			<div className="flex h-full items-center pt-16 sm:pt-32">
				<div className="flex flex-col items-center">
					<p className="text-base font-semibold text-neutral-400 dark:text-neutral-500">
						404
					</p>
					<h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
						Page not found
					</h1>
					<p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
						The page you have requested does not exist
					</p>
					<Link href="/" className="mt-4">
						Go home
					</Link>
				</div>
			</div>
		);
}
