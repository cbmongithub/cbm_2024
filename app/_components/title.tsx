export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-32 text-2xl pb-3 font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
      {children}
    </h1>
  );
}