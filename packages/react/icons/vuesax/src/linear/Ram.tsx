import * as React from "react";
import type { SVGProps } from "react";
const SvgRam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7C4.97 2 3.5 4 3.5 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M13.97 7.78h-6"
    />
  </svg>
);
export default SvgRam;
