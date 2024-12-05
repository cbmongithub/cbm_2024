export function Header({
	title,
	date,
	description,
}: { title: string; date?: string; description: string }) {
	return (
		<header className="min-h-screen">
			<h1 className="mt-32 font-bold font-lg text-5xl">{title}</h1>
			{date && <time>{date}</time>}
			<p className="mt-6 text-md">{description}</p>
		</header>
	);
}


