"use client";

import { type ReactNode, useEffect, useState } from "react";

export const Loader = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`mx-auto flex w-full max-w-3xl flex-col gap-12 px-5 py-10 sm:px-6 ${!isLoaded ? "opacity-80 blur-[1px]" : ""}`}
      aria-busy={!isLoaded}
      aria-live="polite"
      aria-label="Main Content"
    >
      {children}
    </main>
  );
}
