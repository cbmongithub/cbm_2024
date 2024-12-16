import Link from "next/link";

import Button from "@/_components/ui/button";
import { ArrowLeftIcon } from "@/_components/ui/icons";

export default function ButtonRound({ href }: { href: string }) {
  return (
    <Link href={href} aria-labelledby="button">
      <Button
        id="button"
        className="group cursor-pointer mb-8 flex size-10 items-center justify-center rounded-full shadow-md shadow-neutral-900/5 transition border border-neutral-800/50 bg-neutral-950 ring-0 ring-white/10 hover:border-neutral-800 hover:ring-white/20 focus:border-none focus:ring-white/20 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-opacity-50"
        aria-label="Go back"
      >
        <ArrowLeftIcon className="size-4 transition stroke-neutral-500 group-hover:stroke-neutral-400" />
      </Button>
    </Link>
  );
}