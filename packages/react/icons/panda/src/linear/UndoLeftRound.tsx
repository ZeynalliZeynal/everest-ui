import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoLeftRound = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 7h11a5 5 0 0 1 0 10H8M4 7l3-3M4 7l3 3"
    />
  </svg>
);
export default SvgUndoLeftRound;
