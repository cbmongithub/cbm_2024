export function Background() {
	return (
		<div className="relative size-full bg-neutral-100 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
			<div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
			<div className="absolute top-[-10%] right-0 left-0 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
		</div>
	);
}
