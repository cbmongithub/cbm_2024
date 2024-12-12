import Link from "next/link";

import Button from "./button";
import { ArrowLeftIcon } from "./icons";

export default function ButtonRound({ href }: { href: string }) {
  return (
    <Link href={href} aria-labelledby="button">
      <Button
        className="group cursor-pointer mb-8 flex size-10 items-center justify-center rounded-full shadow-md shadow-neutral-900/5 transition border border-neutral-800/50 bg-neutral-900 ring-0 ring-white/10 hover:border-neutral-800 hover:ring-white/20"
        aria-label="Go back"
      >
        <ArrowLeftIcon className="size-4 transition stroke-neutral-500 group-hover:stroke-neutral-400" />
      </Button>
    </Link>
  );
}