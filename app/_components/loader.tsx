"use client";

import { type ReactNode, useEffect, useState } from "react";

export default function Loader({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return <div className={`${!isLoaded && "animate-pulse blur-lg"}`}>{children}</div>;
}