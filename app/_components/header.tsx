export function Header({
	title,
	date,
	description,
}: { title: string; date?: string; description: string }) {
	return (
		<header>
			<h1 className="font-bold font-lg text-5xl">{title}</h1>
			{date && <time>{date}</time>}
			<p className="mt-6 text-md">{description}</p>
		</header>
	);
}


