import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuCheesesburger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 18h14M7 12h14M7 6h14"
    />
    <path
      fill="currentColor"
      d="M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgMenuCheesesburger;
