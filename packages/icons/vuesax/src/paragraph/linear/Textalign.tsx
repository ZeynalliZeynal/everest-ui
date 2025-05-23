import * as React from "react";
import type { SVGProps } from "react";
const SvgTextalign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4.5h18M11.53 9.5H21M3 14.5h18M11.53 19.5H21"
    />
  </svg>
);
export default SvgTextalign;
