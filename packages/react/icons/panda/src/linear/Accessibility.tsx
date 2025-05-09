import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessibility = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 10s-3.537 1.5-6 1.5S6 10 6 10M12 12v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"
    />
  </svg>
);
export default SvgAccessibility;
