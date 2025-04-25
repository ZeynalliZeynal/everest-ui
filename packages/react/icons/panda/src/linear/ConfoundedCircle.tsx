import * as React from "react";
import type { SVGProps } from "react";
const SvgConfoundedCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 12 2-1.5L8 9M16 12l-2-1.5L16 9M16 16l-1.333-1-1.334 1L12 15l-1.333 1-1.334-1L8 16"
    />
  </svg>
);
export default SvgConfoundedCircle;
