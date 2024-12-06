import Image from "next/image";
import Link from "next/link";
import { Header } from "./_components/header";

export default function NotFound() {
  return (
			<>
				<Header title="404" description="Page not found" />
				<div className="flex flex-col justify-center items-center h-[45vh]">
					<Image
						className="rounded-2xl mt-16"
						src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
						alt="John Travolta confused"
						width={300}
						height={300}
					/>
					<p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
						The page you have requested does not exist
					</p>
					<Link
						href="/"
						aria-hidden="true"
						className="relative z-20 mt-4 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
					>
						Go to home
						<svg
							viewBox="0 0 16 16"
							fill="none"
							aria-hidden="true"
							className="ml-1 h-4 w-4 stroke-current"
						>
							<path
								d="M6.75 5.75 9.25 8l-2.5 2.25"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>
			</>
		);

}
