import Link from "next/link";

import { links } from "@/_lib/config";

export function Footer() {
	return (
		<footer className="relative bottom-0 left-0 flex-none pt-32">
			<div className="mx-auto w-full max-w-7xl lg:px-8">
				<div className="border-t border-neutral-100 pb-16 pt-10 dark:border-neutral-700/40">
					<div className="relative px-4 sm:px-8 lg:px-12">
						<div className="mx-auto max-w-2xl lg:max-w-5xl">
							<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
								<ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
									{links.footer.map(({ href, text }) => {
										return (
											<Link
												key={text}
												className="transition hover:text-blue-500 dark:hover:text-blue-600"
												href={href}
											>
												<li>{text}</li>
											</Link>
										);
									})}
								</ul>
								<p className="text-sm text-neutral-400 dark:text-neutral-500">
									&copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
