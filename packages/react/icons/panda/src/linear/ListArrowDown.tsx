import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 17.5 2.5 2.5m0 0 2.5-2.5M17.5 20v-6"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 6H3M21 10H3M11 14H3M11 18H3"
    />
  </svg>
);
export default SvgListArrowDown;
