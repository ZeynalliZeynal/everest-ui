import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskSquare = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
    <ellipse cx={15} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.5 21.5 17 15l-3.143-1.257a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"
    />
  </svg>
);
export default SvgFacemaskSquare;
