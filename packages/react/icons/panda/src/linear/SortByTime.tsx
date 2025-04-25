import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByTime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7H2M8 12H2M10 17H2"
    />
    <circle cx={17} cy={12} r={5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 10v1.846L18 13"
    />
  </svg>
);
export default SvgSortByTime;
