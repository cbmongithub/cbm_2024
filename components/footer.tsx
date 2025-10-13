import Link from "next/link";

import { links } from "lib/config";

export const Footer = () => {
  return (
    <footer
      className="relative bottom-0 left-0 flex-none pt-20"
      aria-label="Footer"
    >
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6">
        <div className="border-t border-neutral-800/60 pb-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <ul
              className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-neutral-300"
              aria-label="Footer Links"
            >
              {links.footer.map(({ href, text }) => {
                return (
                  <li key={text}>
                    <Link
                      className="text-neutral-400 transition hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-neutral-200"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-neutral-500 sm:text-sm">
              &copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
