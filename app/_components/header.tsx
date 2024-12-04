import Link from "next/link";
import { Flex } from "./flex";

export function Header() {
	return (
		<header>
			<Flex>
				<div className="flex flex-row justify-between items-center w-full max-w-2xl px-6 py-8 mx-auto">
					<nav>
						<ul className="flex space-x-4">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Flex>
		</header>
	);
}


