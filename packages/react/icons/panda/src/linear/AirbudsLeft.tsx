import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.676} d="M8 5v3" />
    <circle
      cx={5.5}
      cy={5.5}
      r={5.5}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 21 11)"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 14v5h3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 5.1A5.01 5.01 0 0 1 17.9 9"
    />
  </svg>
);
export default SvgAirbudsLeft;
