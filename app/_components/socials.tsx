import Link from "next/link";

export default function Socials() {
  return (
    <ul className="my-6">
      <li className="mt-4 flex">
        <Link
          className="group flex text-sm font-medium transition text-neutral-200 hover:text-neutral-300"
          href="https://twitter.com/cbmonx"
          aria-label="Follow on X"
        >
          <svg
            viewBox="0 0 64 64"
            width="64"
            height="64"
            className="ml-0.5 size-5 group flex-none fill-neutral-200 transition group-hover:fill-neutral-300"
            role="img"
            aria-labelledby="x-icon-title"
          >
            <title id="x-icon-title">X Icon</title>
            <rect
              className="fill-neutral-200 group-hover:fill-neutral-300"
              width="64"
              height="64"
              rx="10"
              ry="10"
              fill="#eee"
            />
            <path
              d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
              fill="black"
            />
          </svg>
          <span className="ml-4">Follow on X</span>
        </Link>
      </li>
      <li className="mt-4 flex">
        <Link
          className="group flex text-sm font-medium transition text-neutral-200 hover:text-neutral-300"
          href="https://github.com/cbmongithub"
          aria-label="Follow on GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 flex-none fill-neutral-200 transition group-hover:fill-neutral-300"
            role="img"
            aria-labelledby="github-icon-title"
          >
            <title id="github-icon-title">GitHub Icon</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            />
          </svg>
          <span className="ml-4">Follow on GitHub</span>
        </Link>
      </li>
      <li className="mt-4 flex">
        <Link
          className="group flex text-sm font-medium transition text-neutral-200 hover:text-neutral-300"
          href="https://www.linkedin.com/in/cbmonlinkedn"
          aria-label="Follow on LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 flex-none fill-neutral-200 transition group-hover:fill-neutral-300"
            role="img"
            aria-labelledby="linkedin-icon-title"
          >
            <title id="linkedin-icon-title">LinkedIn Icon</title>
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
          </svg>
          <span className="ml-4">Follow on LinkedIn</span>
        </Link>
      </li>
      <li className="mt-4 flex">
        <Link
          className="group flex text-sm font-medium transition text-neutral-200 hover:text-neutral-300"
          href="mailto:hello@christianbmartinez.com?subject=Hello?body=Hello%20Christian,"
          aria-label="Send an email"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-6 flex-none fill-neutral-200 transition group-hover:fill-neutral-300"
            role="img"
            aria-labelledby="email-icon-title"
          >
            <title id="email-icon-title">Email Icon</title>
            <path
              fillRule="evenodd"
              d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
          </svg>
          <span className="ml-4">Send an email</span>
        </Link>
      </li>
    </ul>
  );
}
