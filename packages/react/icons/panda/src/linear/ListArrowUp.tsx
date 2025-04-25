import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M21 6H3M21 10H3M11 14H3M11 18H3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 16.5 17.5 14m0 0L15 16.5m2.5-2.5v6"
    />
  </svg>
);
export default SvgListArrowUp;
