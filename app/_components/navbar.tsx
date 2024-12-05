import { links } from "@/_lib/config";
import Link from 'next/link'

export function Navbar() {
  return (
			<aside className="mb-32 tracking-tight pt-8">
				<nav>
					<div className="mx-auto w-full max-w-2xl">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<nav className="flex flex-row items-center justify-between">
								<ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
									<li>
										<Link
											className="transition hover:text-blue-500 dark:hover:text-blue-600"
											href="/"
										>
											Home
										</Link>
									</li>
									{links.nav.map((link: { href: string; text: string }) => {
										return (
											<li key={link.text}>
												<Link
													className="transition hover:text-blue-500 dark:hover:text-blue-600"
													href={link.href}
												>
													{link.text}
												</Link>
											</li>
										);
									})}
								</ul>
							</nav>
						</div>
					</div>
				</nav>
			</aside>
		);
}
