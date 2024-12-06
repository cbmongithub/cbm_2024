"use client";

import { useEffect, useState } from "react";

export function Loader({ children }: { children: React.ReactNode }) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div className={`${!isLoaded ? "animate-pulse blur-lg" : ""}`}>
			{children}
		</div>
	);
}