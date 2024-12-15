"use client";

import Link from 'next/link'
import { usePathname } from "next/navigation";

import { links } from "@/_lib/config";

export default function Navbar() {
  function setActiveLink(href: string, pathname: string) {
    if (pathname === href || (pathname.split("/")[1] === "blog" && href === "/blog")) {
      return "text-blue-500";
    }
    return "text-white";
  }
  const pathname = usePathname();

  return (
    <aside className="mb-32 tracking-tight pt-8" aria-label="Main Navigation">
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" aria-label="Home">
          <p className="mb-1 text-2xl" aria-hidden="true">
            &#120148;
          </p>
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-md text-neutral-800 dark:text-neutral-200">
          {links.nav.map((link: { href: string; text: string }) => {
            return (
              <li key={link.text}>
                <Link
                  className={`${setActiveLink(link.href, pathname)} transition duration-300 hover:text-blue-500 dark:hover:text-blue-600`}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
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
}
