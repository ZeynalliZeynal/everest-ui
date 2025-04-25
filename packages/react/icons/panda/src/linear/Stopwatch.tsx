import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13V9"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M10 2h4" />
  </svg>
);
export default SvgStopwatch;
