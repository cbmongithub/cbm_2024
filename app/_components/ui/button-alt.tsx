
import Button from "@/_components/ui/button";
import { ArrowRightIcon } from "@/_components/ui/icons";
import Link from "next/link";

export default function ButtonAlt({ href, content }: { href: string; content: string }) {
  return (
    <Link
      href={href}
      className="flex mt-10 flex-row justify-center items-center"
      aria-labelledby="button"
    >
      <Button
        className="group cursor-pointer inline-flex w-auto items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-offset-2 transition active:transition-none bg-neutral-800/75 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 active:bg-neutral-800/50 active:text-neutral-50/70"
        aria-label={`View ${content}`}
        id="button"
      >
        <span className="sr-only">{`View ${content}`}</span>
        <span aria-hidden="true">View {content}</span>
        <ArrowRightIcon className="ml-2 size-3" aria-hidden="true" />
      </Button>
    </Link>
  );
}
