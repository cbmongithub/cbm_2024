import { fd } from "lib/helpers";

export const Header = ({
  title,
  description,
  date,
}: { title: string; date?: string; description?: string }) =>{
  return (
    <header className="py-16 px-6 border border-x-neutral-900 border-b-neutral-900 border-t-0" aria-label={`${title} Header`}>
      <h1 className="text-balance font-bold text-4xl tracking-tighter">{title}</h1>
      {date && (
        <time className="py-3 text-sm text-neutral-400" dateTime={date}>
          {fd(date)}
        </time>
      )}
      <p className="pt-6 text-md">{description}</p>
    </header>
  );
}