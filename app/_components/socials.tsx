import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { links } from "@/_lib/config";

export function Socials({ style }: { style: string }) {
	return (
		<ul className={`${style} text-neutral-600`}>
			<li className="px-5 text-neutral-600 transition duration-150 ease-in-out hover:text-neutral-500">
				<Link
					href={links.socials.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Christian B Martinez | Github Link"
				>
					<FaGithub />
				</Link>
			</li>
			<li className="px-5 text-neutral-600 transition duration-150 ease-in-out hover:text-neutral-500">
				<Link
					href={links.socials.twitter}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Christian B Martinez | Twitter Link"
				>
					<FaSquareXTwitter />
				</Link>
			</li>
			<li className="px-5 text-neutral-600 transition duration-150 ease-in-out hover:text-neutral-500">
				<Link
					href={links.socials.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Christian B Martinez | Github Link"
				>
					<FaLinkedin />
				</Link>
			</li>
		</ul>
	);
}
