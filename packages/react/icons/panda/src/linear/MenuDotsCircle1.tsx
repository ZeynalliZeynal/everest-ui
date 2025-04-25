import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuDotsCircle1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.009m3.995 0h.01m3.977 0H16"
    />
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgMenuDotsCircle1;
