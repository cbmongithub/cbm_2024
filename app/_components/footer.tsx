import Link from "next/link";

export const navLinks = [
	{ href: "/", text: "Home" },
	{ href: "/blog", text: "Blog" },
	{ href: "/portfolio", text: "Portfolio" },
];
export default function Footer() {
	return (
		<footer className="z-10 flex-none pt-32">
			<div className="sm:px-8">
				<div className="mx-auto w-full max-w-7xl lg:px-8">
					<div className="border-t border-neutral-100 pb-16 pt-10 dark:border-neutral-700/40">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
									<ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
										{navLinks.map((link: { href: string; text: string }) => {
											return (
												<Link
													key={link.text}
													className="transition hover:text-blue-500 dark:hover:text-blue-600"
													href={link.href}
												>
													<li>{link.text}</li>
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
			</div>
		</footer>
	);
}
