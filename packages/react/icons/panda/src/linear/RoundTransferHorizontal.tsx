import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 10H7l3.438-3M7 14h10l-3.437 3"
    />
  </svg>
);
export default SvgRoundTransferHorizontal;
