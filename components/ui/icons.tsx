import type { IconProps } from "types";

export const ArrowLeftIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
      aria-labelledby="arrowLeftIconTitle"
      {...props}
    >
      <title id="arrowLeftIconTitle">Arrow Left Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
      aria-labelledby="arrowRightIconTitle"
      {...props}
    >
      <title id="arrowRightIconTitle">Arrow Right Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
