export function Header({
		title,
		description,
	}: { title: string; date?: string; description: string }) {
		return (
			<header>
				<h1 className="font-bold font-lg text-5xl">{title}</h1>
				<p className="pt-6 text-md">{description}</p>
			</header>
		);
	}


