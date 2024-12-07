type IconProps = React.SVGProps<SVGSVGElement>;

export function ArrowLeftIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<title>Arrow Icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			/>
		</svg>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<title>Arrow Icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
	);
}

