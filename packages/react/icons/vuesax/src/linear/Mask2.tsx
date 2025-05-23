import * as React from "react";
import type { SVGProps } from "react";
const SvgMask2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5M12 22v-5M12 7V2"
    />
  </svg>
);
export default SvgMask2;
