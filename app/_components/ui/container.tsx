export function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="w-full">
				<div className="relative">
					<div className="grid grid-cols-1 pb-10">
						<div className="flex flex-col">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}