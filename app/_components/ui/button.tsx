import type { ButtonHTMLAttributes } from "react";

import { cx } from "@/_lib/helpers";


export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cx(
        className,
        "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:transition-none bg-neutral-900 text-neutral-300 hover:text-neutral-50 active:text-neutral-50/70",
      )}
      {...props}
    >
      {children}
    </button>
  );
}

