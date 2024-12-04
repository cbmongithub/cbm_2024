export function Flex({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex size-screen justify-center items-center">
			{children}
		</div>
	);
}