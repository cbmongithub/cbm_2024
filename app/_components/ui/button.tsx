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
      className={cx(
        className,
        "group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-900/75 text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100 active:bg-neutral-900/50 active:text-neutral-100/70",
      )}
      aria-label={props["aria-label"] || "Button"}
      {...props}
    >
      {children}
    </button>
  );
}