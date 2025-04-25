import * as React from "react";
import type { SVGProps } from "react";
const SvgSortHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 8H6m0 0 4.125-4M6 8l4.125 4M6 16h12m0 0-4.125-4M18 16l-4.125 4"
    />
  </svg>
);
export default SvgSortHorizontal;
