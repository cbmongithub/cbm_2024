import type { ButtonHTMLAttributes } from "react";

import { cx } from "@/_lib/helpers";

type VariantProps = keyof typeof variants;
// TODO: Move all buttons here eventually
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
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

const variants = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-50 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70",
  tertiary:
    "group mb-8 flex size-10 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",
};

export function ButtonAlt({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cx(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}