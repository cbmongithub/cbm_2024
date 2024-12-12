import { cx } from "@/_lib/helpers";

import type { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label={props["aria-label"] || "button"}
      className={cx(
        className,
        "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-900 text-neutral-300 hover:text-neutral-50 active:text-neutral-50/70",
      )}
      {...props}
    >
      {children}
    </button>
  );
}