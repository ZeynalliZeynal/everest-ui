import * as React from "react";
import type { SVGProps } from "react";
const SvgSad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 17c.667-1.286 2.6-3 5-3s4.333 1.714 5 3m5-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      fill="currentColor"
      d="M10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgSad;
