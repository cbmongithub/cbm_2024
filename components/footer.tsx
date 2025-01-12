import Link from "next/link";

import { links } from "lib/config";

export const Footer = () => {
  return (
    <footer
      className='relative bottom-0 left-0 flex-none pt-32'
      aria-label='Footer'
    >
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <div className='border-t pb-16 pt-10 border-neutral-800'>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
              <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                <ul
                  className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-200'
                  aria-label='Footer Links'
                >
                  {links.footer.map(({ href, text }) => {
                    return (
                      <li key={text}>
                        <Link
                          className='transition hover:text-blue-600'
                          href={href}
                        >
                          {text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <p className='text-sm text-neutral-400'>
                  &copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}