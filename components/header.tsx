import { formatDate } from "lib/helpers";

export const Header = ({
  title,
  description,
  date,
}: {
  title: string;
  date?: string;
  description?: string;
}) => {
  return (
    <header aria-label={`${title} Header`} className="space-y-4">
      <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {date ? (
        <time className="block text-xs uppercase tracking-[0.35em] text-neutral-500" dateTime={date}>
          {formatDate(date)}
        </time>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-sm text-neutral-300 sm:text-base">{description}</p>
      ) : null}
    </header>
  );
};
