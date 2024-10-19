export type CnProps = (
	...cn: (string | Record<string, boolean>)[]
) => string | string[];

export const merge = (...cn: (string | Record<string, boolean>)[]) => {
	const classes = cn
		.flatMap((c) =>
			typeof c === "string"
				? c
				: Object.entries(c)
						.filter(([, v]) => v)
						.map(([k]) => k)
		)
		.filter(Boolean);

	return [...new Set(classes)].join(" ");
};

export const mergeCn = (...cn: (string | Record<string, boolean>)[]) => {
	const c = cn.filter(Boolean).join(" ");
	return [...new Set(c)].join(" ");
};
