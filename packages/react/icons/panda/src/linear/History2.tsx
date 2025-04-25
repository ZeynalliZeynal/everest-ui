import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v4h4"
    />
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeDasharray="0.5 3.5"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgHistory2;
