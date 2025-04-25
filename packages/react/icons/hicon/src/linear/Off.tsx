import * as React from "react";
import type { SVGProps } from "react";
const SvgOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 4c2.39 1.827 4 4.759 4 8 0 5.523-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 4-8m6-2v7"
    />
  </svg>
);
export default SvgOff;
