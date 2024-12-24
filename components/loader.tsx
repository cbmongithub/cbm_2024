"use client";

import { type ReactNode, useEffect, useState } from "react";

export function Loader({
  children,
}: {
  children?: ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`mx-auto flex flex-col px-6 max-w-2xl ${!isLoaded && "animate-pulse blur-lg"}`}
      aria-busy={!isLoaded}
      aria-live="polite"
      aria-label="Main Content"
    >
      {children}
    </main>
  );
}