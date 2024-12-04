export function SignUpForm() {
	return (
		<form
			className="relative rounded-2xl p-6 dark:border-neutral-700/40"
			action="/thank-you"
		>
			<h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className="h-6 w-6 flex-none"
				>
					<path
						d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
						className="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"
					/>
					<path
						d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
						className="stroke-neutral-400 dark:stroke-neutral-500"
					/>
				</svg>
				<span className="ml-3">Stay up to date</span>
			</h2>
			<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required={false}
					className="min-w-0 flex-auto appearance-none rounded-md border border-neutral-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-neutral-800/5 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-neutral-700 dark:bg-neutral-700/[0.15] dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
				/>
				<button
					className="ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-neutral-100 outline-offset-2 transition hover:bg-neutral-700 active:bg-neutral-800 active:text-neutral-100/70 active:transition-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-700 dark:active:text-neutral-100/70"
					type="submit"
				>
					Join
				</button>
			</div>
		</form>
	);
}