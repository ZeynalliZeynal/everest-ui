import * as React from "react";
import type { SVGProps } from "react";
const SvgPoker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 16h8m6-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);
export default SvgPoker;
