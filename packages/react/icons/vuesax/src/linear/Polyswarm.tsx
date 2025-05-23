import * as React from "react";
import type { SVGProps } from "react";
const SvgPolyswarm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.5 3.2h5c3.8 0 7 3.1 7 7 0 3.8-3.1 7-7 7h-11"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.2 6.8h10.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H8M8.5 10.8h-3M6.5 20.8h-4"
    />
  </svg>
);
export default SvgPolyswarm;
