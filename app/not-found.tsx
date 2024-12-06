import Image from "next/image";
import Link from "next/link";
import { Header } from "./_components/header";
import { ArrowLeftIcon } from "./_components/ui/icons";

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
						<ArrowLeftIcon />
						Go back home
					</Link>
				</div>
			</>
		);

}
