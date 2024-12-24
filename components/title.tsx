import type { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-100">
      {children}
    </h1>
  );
}