import * as React from "react";
import type { SVGProps } from "react";
const SvgLink1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.99 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M9 6.5H7.5A5.51 5.51 0 0 0 2 12c0 3.02 2.47 5.5 5.5 5.5H9M8 12h8"
    />
  </svg>
);
export default SvgLink1;
