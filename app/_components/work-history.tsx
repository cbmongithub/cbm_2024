import Image from "next/image";
import Link from "next/link";

export function WorkHistory() {
	return (
		<div className="relative w-full">
			<h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className="size-6 flex-none"
				>
					<path
						d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
						className="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"
					/>
					<path
						d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
						className="stroke-neutral-400 dark:stroke-neutral-500"
					/>
				</svg>
				<span className="ml-3">Work</span>
			</h2>
			<ol className="mt-6 space-y-4">
				<li className="flex gap-4">
					<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
						<Image
							alt=""
							width={28}
							height={28}
							className="size-7 rounded-full"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLqS4eru5_cEDH2O8ET9zq_R5hNarBTq2Z_XjXvo6dCLIyEC9bF9TBIdzBVJwZg_m4IA&usqp=CAU"
						/>
					</div>
					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dt className="sr-only">Company</dt>
						<dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
							Northrop Grumman
						</dd>
						<dt className="sr-only">Role</dt>
						<dd className="text-xs text-neutral-500 dark:text-neutral-400">
							Technician
						</dd>
						<dt className="sr-only">Date</dt>
						<dd
							className="ml-auto text-xs text-neutral-400 dark:text-neutral-500"
							aria-label="2019 until Present"
						>
							<time dateTime="2019">2019</time>{" "}
							<span aria-hidden="true">—</span>{" "}
							<time dateTime="2023">Present</time>
						</dd>
					</dl>
				</li>
				<li className="flex gap-4">
					<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
						<Image
							alt="Hello world"
							width={28}
							height={28}
							className="size-7 object-contain aspect-square rounded-full bg-black"
							src="/img/cbmlogo.webp"
						/>
					</div>
					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dt className="sr-only">Company</dt>
						<dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
							CBM, LLC
						</dd>
						<dt className="sr-only">Role</dt>
						<dd className="text-xs text-neutral-500 dark:text-neutral-400">
							Web Developer
						</dd>
						<dt className="sr-only">Date</dt>
						<dd
							className="ml-auto text-xs text-neutral-400 dark:text-neutral-500"
							aria-label="2014 until Present"
						>
							<time dateTime="2014">2018</time>{" "}
							<span aria-hidden="true">—</span>{" "}
							<time dateTime="Present">Present</time>
						</dd>
					</dl>
				</li>
				<li className="flex gap-4">
					<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
						<Image
							alt=""
							width={28}
							height={28}
							className="size-7 rounded-full bg-white"
							src="/img/mixdlogo.webp"
						/>
					</div>
					<dl className="flex flex-auto flex-wrap gap-x-2">
						<dt className="sr-only">Company</dt>
						<dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
							Mixdlabs
						</dd>
						<dt className="sr-only">Role</dt>
						<dd className="text-xs text-neutral-500 dark:text-neutral-400">
							Co-founder & CTO
						</dd>
						<dt className="sr-only">Date</dt>
						<dd
							className="ml-auto text-xs text-neutral-400 dark:text-neutral-500"
							aria-label="2011 until 2014"
						>
							<time dateTime="2011">2012</time>{" "}
							<span aria-hidden="true">—</span>{" "}
							<time dateTime="2014">2017</time>
						</dd>
					</dl>
				</li>
			</ol>
			<Link
				className="group mt-6 inline-flex w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-900 outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/75 active:transition-none dark:bg-neutral-800/75 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:active:bg-neutral-800/50 dark:active:text-neutral-50/70"
				href="/"
				download
			>
				Download CV
				<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					className="size-4 stroke-neutral-400 transition group-active:stroke-neutral-600 dark:group-hover:stroke-neutral-50 dark:group-active:stroke-neutral-50"
				>
					<path
						d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</div>
	);
}
