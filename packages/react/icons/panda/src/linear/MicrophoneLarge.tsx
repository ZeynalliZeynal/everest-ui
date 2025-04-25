import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophoneLarge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 6.5s.473-.5 2-.5 2 .5 2 .5M10 9.5s.473-.5 2-.5 2 .5 2 .5M21 11v2a9 9 0 1 1-18 0v-2"
    />
  </svg>
);
export default SvgMicrophoneLarge;
