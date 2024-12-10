"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/_components/ui/icons";
import { cx } from "@/_lib/helpers";

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
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

export function ButtonRound({ href }: { href: string }) {
  return (
    <Link href={href}>
      <Button className="group cursor-pointer mb-8 flex size-10 items-center justify-center rounded-full shadow-md shadow-neutral-900/5 transition border border-neutral-800/50 bg-neutral-900 ring-0 ring-white/10 hover:border-neutral-800 hover:ring-white/20">
        <ArrowLeftIcon className="size-4 transition stroke-neutral-500 group-hover:stroke-neutral-400" />
      </Button>
    </Link>
  );
}

export function ButtonAlt({ href, content }: { href: string; content: string }) {
  return (
    <Link href={href} className="flex mt-10 flex-row justify-center items-center">
      <Button className="group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md  px-3 py-2 text-sm font-medium text-neutral-900 outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/60 active:transition-none dark:bg-neutral-800/75 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:active:bg-neutral-800/50 dark:active:text-neutral-50/70">
        View {content}
        <ArrowRightIcon className="ml-2 size-3" />
      </Button>
    </Link>
  );
}
