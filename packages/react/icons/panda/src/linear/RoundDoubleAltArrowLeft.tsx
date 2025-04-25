import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundDoubleAltArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15.5 9-3 3 3 3M11.5 9l-3 3 3 3"
    />
  </svg>
);
export default SvgRoundDoubleAltArrowLeft;
