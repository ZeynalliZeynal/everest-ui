import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 20.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"
    />
    <ellipse cx={15} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
  </svg>
);
export default SvgFacemaskCircle;
