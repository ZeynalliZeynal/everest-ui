import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundArrowRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 9 6 6m0 0v-4.5m0 4.5h-4.5"
    />
  </svg>
);
export default SvgRoundArrowRightDown;
