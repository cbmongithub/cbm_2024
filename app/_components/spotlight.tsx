"use client";

import { useCallback, useRef, useState } from "react";

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
	const [mouseDownState, setMouseDownState] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (!divRef.current || isFocused) return;

			const rect = divRef.current.getBoundingClientRect();
			setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		},
		[isFocused],
	);

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseDown = () => {
		setMouseDownState(true);
		setOpacity(0);
	};

	const handleMouseUp = () => {
		setMouseDownState(false);
		setOpacity(1);
	};

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={() => setOpacity(1)}
			onMouseLeave={() => setOpacity(0)}
			className={`relative flex ${height} ${width} items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 p-16 my-6`}
		>
			<div
				className="absolute inset-0 transition-opacity duration-300"
				style={{
					opacity,
					background: `radial-gradient(${mouseDownState ? "300px" : "150px"} circle at ${position.x}px ${position.y}px, rgba(0,0,255,.25), transparent 100%)`,
				}}
			/>
			{children}
		</div>
	);
}
