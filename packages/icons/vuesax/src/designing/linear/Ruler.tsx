import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      clipPath="url(#ruler_svg__a)"
    >
      <path d="M5 17h14q3 0 3-3v-4q0-3-3-3H5q-3 0-3 3v4q0 3 3 3ZM18 7v5M6 7v4M10.05 7 10 12M14 7v3" />
    </g>
    <defs>
      <clipPath id="ruler_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRuler;
