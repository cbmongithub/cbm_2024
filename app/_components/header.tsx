
import Image from "next/image";

export function Header({
	imgSrc,
	title,
	date,
	description,
}: { imgSrc: string; title: string; date?: string; description: string }) {
	return (
		<header className="flex flex-col justify-center items-center max-w-2xl mx-auto">
			<Image
				priority
				alt="image of tech"
				width={1280}
				height={720}
				className="rounded-2xl"
				src={imgSrc}
			/>
			<h1 className="mt-32 font-bold font-lg text-5xl">{title}</h1>
			{date && <time>{date}</time>}
			<p className="mt-6 text-md">{description}</p>
		</header>
	);
}


