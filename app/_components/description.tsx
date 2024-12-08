
export function Description({ children }: { children: React.ReactNode }) {
	return (
		<p className="font-light text-xs sm:text-sm py-3 md:text-md">{children}</p>
	);
}