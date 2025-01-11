import type { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className='mx-auto max-w-2xl'>
        <div className='w-full'>
          <div className='relative'>
            <div className='grid grid-cols-1'>
              <div className='flex flex-col' aria-label='Content Container'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}