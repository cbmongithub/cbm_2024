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
				<nav className="flex flex-row items-start" id="nav">
					<div className="flex flex-row space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
								>
									{name}
								</Link>
							);
						})}
					</div>
				</nav>
			</aside>
		);
}
