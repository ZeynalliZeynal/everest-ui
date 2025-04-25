import * as React from "react";
import type { SVGProps } from "react";
const SvgSadCircle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"
    />
    <ellipse cx={15} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
  </svg>
);
export default SvgSadCircle;
