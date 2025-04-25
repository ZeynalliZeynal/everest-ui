import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={9.5} cy={14.5} r={7.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17 7-2 2M19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1"
    />
  </svg>
);
export default SvgBombMinimalistic;
