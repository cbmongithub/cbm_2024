import { formatDate } from "@/_lib/helpers";

export function Header({
  title,
  description,
  date,
}: { title: string; date?: string; description: string }) {
  return (
    <header>
      <h1 className="text-balance font-bold text-4xl tracking-tighter">{title}</h1>
      {date && (
        <p className="py-3 text-sm text-neutral-600 dark:text-neutral-400">{formatDate(date)}</p>
      )}
      <p className="pt-6 text-md">{description}</p>
    </header>
  );
}