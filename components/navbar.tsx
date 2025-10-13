"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "lib/config";
import Logo from "./logo";

const isLinkActive = (href: string, pathname: string | null) => {
  if (!pathname) {
    return false;
  }

  if (pathname === href) {
    return true;
  }

  const [, topLevelSegment] = pathname.split("/");
  return topLevelSegment === "blog" && href === "/blog";
};

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className="pt-6 pb-10 tracking-tight" aria-label="Main Navigation">
      <nav
        aria-label="Navigation"
        className="flex items-center justify-between rounded-2xl border border-neutral-800/60 bg-neutral-900/40 px-5 py-4 backdrop-blur"
      >
        <Link href="/" aria-label="Home">
          <Logo className="h-6 w-full max-w-[41.82px]" />
        </Link>
        <ul
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-neutral-400"
          aria-label="Navigation List"
        >
          {links.nav.map((link: { href: string; text: string }) => {
            const active = isLinkActive(link.href, pathname);

            return (
              <li key={link.text} aria-label="Navigation Item">
                <Link
                  className={`${
                    active ? "text-neutral-100" : "text-neutral-400"
                  } transition duration-200 hover:text-blue-400 focus-visible:outline-offset-4 focus-visible:outline-neutral-200`}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
