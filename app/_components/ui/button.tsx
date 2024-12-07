import { cx } from "@/_lib/helpers";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={cx(
				className,
				"group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-900 outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/60 active:transition-none dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:active:bg-neutral-900/50 dark:active:text-neutral-50/70",
			)}
			{...props}
		>
			{children}
		</button>
	);
}
