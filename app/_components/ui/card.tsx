"use client";

import Link from "next/link";

import { ArrowRightIcon } from "@/_components/ui/icons";

export default function Card({
  title,
  date,
  description,
  content,
  contentUrl,
  center,
}: {
  title: string;
  date?: string;
  description: string;
  content: string;
  contentUrl?: string;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col ${center ? "items-center" : "items-start"} p-16`}>
      <h2 className="z-30 text-sm md:text-base font-semibold tracking-tight text-neutral-100">
        <div className="-inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="z-30">{title}</span>
      </h2>
      <time className="sm:flex z-30 relative order-first mb-3 items-center text-sm text-neutral-400 dark:text-neutral-500">
        {date}
      </time>
      <p
        className={`sm:flex mt-2 text-sm  ${center ? "text-center" : "text-left"}  text-neutral-600 dark:text-neutral-400`}
      >
        {description}
      </p>
      <div className="absolute z-10 bottom-0 left-0 flex flex-col justify-center items-center w-full h-52 bg-gradient-to-t from-black" />
      <Link
        href={contentUrl as unknown as URL}
        aria-hidden="true"
        className="z-30 mt-4 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
      >
        Go to {content}
        <ArrowRightIcon className="ml-2 size-3" />
      </Link>
    </div>
  );
}