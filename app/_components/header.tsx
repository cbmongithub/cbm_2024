import { formatDate } from "@/_lib/helpers";
import type { ReactNode } from "react";

export default function Header({
  title,
  description,
  date,
  children,
  ...props
}: { title: string; date?: string; description: string, children?: ReactNode }) {
  return (
    <header {...props}>
      <h1 className="text-balance font-bold text-4xl tracking-tighter">{title}</h1>
      {date && (
        <time className="py-3 text-sm text-neutral-400" dateTime={date}>
          {formatDate(date)}
        </time>
      )}
      <p className="pt-6 text-md">{description}</p>
      {children && (children)}
    </header>
  );
}