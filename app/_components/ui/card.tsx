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
    <div className={`flex flex-col ${center ? "items-center" : "items-start"} p-8 sm:p-16`}>
      <h2 className="z-30 text-sm md:text-base font-semibold tracking-tight text-neutral-100">
        <div className="-inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="z-30">{title}</span>
      </h2>
      {date && (
        <time
          dateTime={new Date(date).toISOString()}
          className="order-first mb-4 relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50"
        >
          <span className="absolute inset-[-400%] animate-[spin_4s_linear_alternate_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6_0%,#000000,#3b82f6_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-neural-200 backdrop-blur-3xl">
            {date}
          </span>
        </time>
      )}
      <p
        className={`sm:flex mt-2 text-sm ${center ? "text-center" : "text-left"} text-neutral-400`}
      >
        {description}
      </p>
      <div className="absolute z-10 bottom-0 left-0 flex flex-col justify-center items-center w-full h-52 bg-gradient-to-t from-black" />
      {contentUrl && (
        <Link
          href={contentUrl}
          aria-label={`Go to ${content}`}
          className="z-30 mt-4 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
        >
          Go to {content}
          <ArrowRightIcon className="ml-2 size-3" />
        </Link>
      )}
    </div>
  );
}