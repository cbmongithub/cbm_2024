"use client";

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
      className={`flex flex-col ${center ? 'items-center' : 'items-start'} p-8 sm:p-16`}
    >
      <h2 className='z-30 text-sm md:text-base font-semibold tracking-tight text-neutral-100'>
        <div className='-inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl' />
        <span className='z-30'>{title}</span>
      </h2>
      {date && (
        <time
          dateTime={new Date(date).toISOString()}
          className='order-first shadow-2xl mb-4 relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'
        >
          <span className='absolute inset-[-200%] animate-[spin_8s_linear_alternate_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6_0%,#262626,#3b82f6_100%)]' />
          <span className='inline-flex cursor-default size-full text-neutral-100 items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-neural-200 backdrop-blur-3xl'>
            {date}
          </span>
        </time>
      )}
      <p
        className={`sm:flex mt-2 text-sm ${center ? 'text-center' : 'text-left'} text-neutral-400`}
      >
        {description}
      </p>
      {contentUrl && (
        <Link
          href={content.charAt(0).toUpperCase() + content.slice(1)}
          className='z-30 mt-4 flex items-center text-sm font-medium text-blue-500 hover:text-blue-600'
        >
          {content.charAt(0).toUpperCase() + content.slice(1)}
          <ArrowRightIcon className='ml-2 size-3' />
        </Link>
      )}
    </div>
  )
}


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
    <div className="relative w-full rounded-2xl my-6 flex flex-col sm:flex-row">
      <div className="w-full h-48 mt-[-25px] sm:mt-0 sm:w-2/5 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={imgSrc}
          alt={imgAlt}
          height={360}
          width={480}
          className="size-full rounded-2xl object-cover"
        />
      </div>
      <div className="p-6">
        <time
          className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-500"
          dateTime={new Date(date).toISOString()}
          aria-label={`Date ${date}`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-neutral-500" />
          </span>
          {date}
        </time>
        <h2 className="text-sm sm:text-base font-semibold tracking-tight text-neutral-100">
          <div
            className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl"
            aria-hidden="true"
          />
          <span
            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
            aria-hidden="true"
          />
          <span className="relative">{title}</span>
        </h2>
        <p className="hidden sm:block relative mt-2 text-sm text-neutral-400">{description}</p>
        <div className="inline-flex flex-row justify-evenly mt-4 space-x-4">
          <Link
            href={contentUrl}
            aria-label={`Go to demo of ${title}`}
            className="z-50 font-medium text-blue-500 hover:text-blue-600"
          >
            Demo
          </Link>
          <Link
            href={repoUrl}
            aria-label={`View source of ${title}`}
            className="z-50 font-medium text-blue-500 hover:text-blue-600"
          >
            Source
          </Link>
        </div>
      </div>
    </div>
  );
}