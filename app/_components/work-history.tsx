import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./ui/icons";

export default function WorkHistory() {
  return (
    <div className="relative w-full p-8 sm:p-16">
      <h2 className="flex text-sm font-semibold text-neutral-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-neutral-100/10 stroke-neutral-500"
          />
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-neutral-500"
          />
        </svg>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {[
          {
            company: "Northrop Grumman",
            role: "Technician",
            startDate: "2019",
            endDate: "Present",
            logoSrc:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLqS4eru5_cEDH2O8ET9zq_R5hNarBTq2Z_XjXvo6dCLIyEC9bF9TBIdzBVJwZg_m4IA&usqp=CAU",
            logoAlt: "Northrop Grumman logo",
          },
          {
            company: "CBM, LLC",
            role: "Web Developer",
            startDate: "2018",
            endDate: "Present",
            logoSrc: "/img/cbmlogo.webp",
            logoAlt: "CBM, LLC logo",
          },
          {
            company: "Mixdlabs",
            role: "Technical Founder",
            startDate: "2012",
            endDate: "2017",
            logoSrc: "/img/mixdlogo.webp",
            logoAlt: "Mixdlabs logo",
          },
        ].map((job) => (
          <li key={job.startDate} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 border border-neutral-700/50 bg-neutral-800 ring-0">
              <Image
                alt={job.logoAlt}
                width={28}
                height={28}
                className="size-7 rounded-full"
                src={job.logoSrc}
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-neutral-100">
                {job.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-neutral-500">{job.role}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-neutral-400"
                aria-label={`${job.startDate} until ${job.endDate}`}
              >
                <time dateTime={job.startDate}>{job.startDate}</time>{" "}
                <span aria-hidden="true">—</span> <time dateTime={job.endDate}>{job.endDate}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        className="group mt-6 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-neutral-900 outline-offset-2 transition hover:bg-neutral-100 active:bg-neutral-100 active:text-neutral-900/75 active:transition-none bg-neutral-800/75 text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 active:bg-neutral-800/50 active:text-neutral-50/70"
        href="/"
      >
        <ArrowRightIcon className="ml-2 size-3" />
      </Link>
    </div>
  );
}
