import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7"
    />
    <circle cx={7} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
    <circle cx={17} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgSkateboard;
