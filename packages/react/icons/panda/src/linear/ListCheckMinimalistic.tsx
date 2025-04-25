import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheckMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6H3M10 11H3M10 16H3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 13.5 2.1 2.5 3.9-5"
    />
  </svg>
);
export default SvgListCheckMinimalistic;
