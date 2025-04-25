import * as React from "react";
import type { SVGProps } from "react";
const SvgWind = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8"
    />
  </svg>
);
export default SvgWind;
