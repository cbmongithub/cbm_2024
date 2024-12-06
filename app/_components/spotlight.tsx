"use client";

import { useRef, useState } from "react";

export function Spotlight({
	height = "h-48",
	width = "w-full",
	children,
}: {
	height?: string;
	width?: string;
	children: React.ReactNode;
}) {
	const divRef = useRef<HTMLDivElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!divRef.current || isFocused) return;

		const div = divRef.current;
		const rect = div.getBoundingClientRect();

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`mt-6 relative flex ${height} ${width} items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 px-6 py-16`}
		>
			<div
				className="absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(0,0,255,.25), transparent 100%)`,
				}}
			/>
			{children}
		</div>
	);
}
