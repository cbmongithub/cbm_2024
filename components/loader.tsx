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
    <div
      className={`${!isLoaded && "animate-pulse blur-lg"}`}
      aria-busy={!isLoaded}
      aria-live="polite"
    >
      {children}
    </div>
  );
}