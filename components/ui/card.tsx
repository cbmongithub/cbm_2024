import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "ui/icons";

export const Card = ({
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
}) => {
  return (
    <div
      className={`group flex flex-col ${center ? "items-center text-center" : "items-start"} gap-4 rounded-2xl border border-neutral-800/60 bg-neutral-900/35 p-6 sm:p-8`}
    >
      <h2 className="text-base font-semibold tracking-tight text-neutral-100 sm:text-lg">
        {title}
      </h2>
      {date && (
        <time
          dateTime={new Date(date).toISOString()}
          className="order-first inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-500"
        >
          <span className="h-px w-8 bg-neutral-700" aria-hidden="true" />
          {date}
        </time>
      )}
      <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
        {description}
      </p>
      {contentUrl && (
        <Link
          href={contentUrl}
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-neutral-200 transition hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-neutral-200"
        >
          <span className="z-50 uppercase tracking-[0.3em] text-xs text-neutral-500 group-hover/link:text-blue-300">
            View {content}
          </span>
          <ArrowRightIcon className="size-4 text-neutral-400 transition group-hover/link:text-blue-400" />
        </Link>
      )}
    </div>
  );
};

export const CardImg = ({
  title,
  imgSrc,
  imgAlt,
  date,
  description,
  contentUrl,
  repoUrl,
}: {
  title: string;
  imgSrc: string;
  imgAlt: string;
  date: string;
  description: string;
  content: string;
  contentUrl: string;
  repoUrl: string;
}) => {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/35">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={imgAlt}
          height={360}
          width={480}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <time
          className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-neutral-500"
          dateTime={new Date(date).toISOString()}
          aria-label={`Date ${date}`}
        >
          <span className="h-px w-8 bg-neutral-700" aria-hidden="true" />
          {date}
        </time>
        <h2 className="text-base font-semibold tracking-tight text-neutral-100 sm:text-lg">
          {title}
        </h2>
        <p className="text-sm text-neutral-300 sm:block">{description}</p>
        <div className="mt-auto inline-flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-200">
          <Link
            href={contentUrl}
            aria-label={`Go to demo of ${title}`}
            className="transition hover:text-blue-400 focus-visible:outline-offset-4 focus-visible:outline-neutral-200"
          >
            Demo
          </Link>
          <Link
            href={repoUrl}
            aria-label={`View source of ${title}`}
            className="transition hover:text-blue-400 focus-visible:outline-offset-4 focus-visible:outline-neutral-200"
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
};
