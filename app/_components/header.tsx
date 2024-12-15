import { formatDate } from "@/_lib/helpers";

export default function Header({
  title,
  description,
  date,
}: { title: string; date?: string; description: string }) {
  return (
    <header>
      <h1 className="text-balance font-bold text-4xl tracking-tighter">{title}</h1>
      {date && (
        <time className="py-3 text-sm text-neutral-600 dark:text-neutral-400" dateTime={date}>
          {formatDate(date)}
        </time>
      )}
      <p className="pt-6 text-md">{description}</p>
    </header>
  );
}