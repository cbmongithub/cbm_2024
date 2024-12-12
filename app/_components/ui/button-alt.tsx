import Link from "next/link";

import Button from "./button";
import { ArrowRightIcon } from "./icons";

export default function ButtonAlt({ href, content }: { href: string; content: string }) {
  return (
    <Link
      href={href}
      className="flex mt-10 flex-row justify-center items-center"
      aria-labelledby="button"
    >
      <Button
        className="group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md  px-3 py-2 text-sm font-medium text-neutral-900 outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/60 active:transition-none dark:bg-neutral-800/75 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:active:bg-neutral-800/50 dark:active:text-neutral-50/70"
        aria-label={`View ${content}`}
      >
        View {content}
        <ArrowRightIcon className="ml-2 size-3" />
      </Button>
    </Link>
  );
}
