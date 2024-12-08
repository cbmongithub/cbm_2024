
export function Loading({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="animate-pulse blur-lg">{children}</div>;
}