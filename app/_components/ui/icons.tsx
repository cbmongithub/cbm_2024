import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function XIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className={`ml-0.5 ${props.className ?? "size-6"} group flex-none fill-neutral-200 transition group-hover:fill-neutral-300`}
      {...props}
    >
      <title>X Icon</title>
      <rect
        className="fill-neutral-200 group-hover:fill-neutral-300"
        width="64"
        height="64"
        rx="10"
        ry="10"
        fill="#eee"
      />
      <path
        d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
        fill="black"
      />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <title>Arrow Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <title>Arrow Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

