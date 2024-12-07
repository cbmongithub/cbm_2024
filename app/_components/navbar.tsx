"use client";
import { links } from "@/_lib/config";
import Link from 'next/link'
import { usePathname } from "next/navigation";

export function Navbar() {
	const pathname = usePathname();

  return (
			<aside className="mb-32 tracking-tight pt-8">
				<nav className="flex flex-row items-center justify-between">
					<Link href="/">
						<p className="text-2xl">&#120148;</p>
					</Link>
					<ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-md text-neutral-800 dark:text-neutral-200">
						{links.nav.map((link: { href: string; text: string }) => {
							return (
								<li key={link.text}>
									<Link
										className={`${pathname === link.href && "text-blue-500"} transition duration-300 hover:text-blue-500 dark:hover:text-blue-600`}
										href={link.href}
									>
										{link.text}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</aside>
		);
}
