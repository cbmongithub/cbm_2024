import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "./icons";

export default function CardAlt({
  title,
  imgSrc,
  imgAlt,
  date,
  description,
  contentUrl,
}: {
  title: string;
  imgSrc: string;
  imgAlt: string;
  date: string;
  description: string;
  content: string;
  contentUrl: string;
}) {
  return (
    <div className="relative h-auto rounded-2xl my-6 flex flex-col md:flex-row border border-neutral-800">
      <div className="relative md:w-2/5 shrink-0 overflow-hidden">
        <Image
          src={imgSrc}
          alt={imgAlt}
          height={360}
          width={480}
          className="size-full rounded-2xl object-cover"
        />
      </div>
      <div className="p-6">
        <time className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-400 dark:text-neutral-500">
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-500" />
          </span>
          {date}
        </time>
        <h2 className="text-sm md:text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{title}</span>
        </h2>{" "}
        <p className="hidden sm:block relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="flex flex-row justify-between items-center">
          <Link
            href={contentUrl as unknown as URL}
            aria-hidden="true"
            className="relative z-20 mt-4 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
          >
            Go to demo
            <ArrowRightIcon className="ml-2 size-3" />
          </Link>
          <Link
            href={contentUrl as unknown as URL}
            aria-hidden="true"
            className="relative z-20 mt-4 ml-12 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
          >
            View source
            <ArrowRightIcon className="ml-2 size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}