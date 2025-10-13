export const Title = ({ text }: { text: string }) => {
  return (
    <h1
      aria-label={`${text} Heading`}
      className="mt-20 text-sm! font-medium uppercase tracking-[0.45em] text-neutral-400"
    >
      {text}
    </h1>
  );
};
