import * as React from "react";
import type { SVGProps } from "react";
const SvgBackwardItem = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7C13.9 11 13 10.1 13 7.85v-2.7C13 2.9 13.9 2 16.15 2h2.7C21.1 2 22 2.9 22 5.15M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.38 11v2.62c0 2.69-1.07 3.76-3.76 3.76H11v-1.23C11 13.9 10.1 13 7.85 13H6.62v-2.62c0-2.69 1.07-3.76 3.76-3.76H13v1.23c0 2.25.9 3.15 3.15 3.15z"
    />
  </svg>
);
export default SvgBackwardItem;
