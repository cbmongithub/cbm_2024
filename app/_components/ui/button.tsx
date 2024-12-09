import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cx } from "@/_lib/helpers";

type VariantProps = keyof typeof buttonVariants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps;
  className?: string;
  children?: ReactNode;
};

const buttonVariants = {
  default:
    "bg-neutral-50 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-800/60 dark:bg-neutral-800/50 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:active:bg-neutral-800/50 dark:active:text-neutral-50/70",
  alt: "group mb-8 flex size-10 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-neutral-800/5 ring-neutral-800/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0 dark:ring-white/10 dark:hover:border-neutral-700 dark:hover:ring-white/20",
  round:
    "group cursor-pointer mb-8 flex size-10 items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-800/5 transition dark:border dark:border-neutral-800/50 dark:bg-neutral-800 dark:ring-0 dark:ring-white/10 dark:hover:border-neutral-800 dark:hover:ring-white/20",
};

export function Button({ variant = "default", className, children, ...props }: ButtonProps) {
  return (
    <button type="button" className={cx(buttonVariants[variant], className)} {...props}>
      {children}
    </button>
  );
}



