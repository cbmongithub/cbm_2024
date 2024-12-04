import Link from 'next/link'

const navItems = {
	"/": {
		name: "home",
	},
	"/blog": {
		name: "blog",
	},
	"/portfolio": {
		name: "portfolio",
	},
};

export function Navbar() {
  return (
			<aside className="mb-32 py-6 tracking-tight">
				<nav className="flex flex-row justify-center items-center" id="nav">
					<ul className="flex flex-row space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link key={path} href={path}>
									<li className="flex align-middle items-center transition-all text-neutral-600 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-neutral-100 relative py-1 px-2 m-1">
										{name}
									</li>
								</Link>
							);
						})}
					</ul>
				</nav>
			</aside>
		);
}
