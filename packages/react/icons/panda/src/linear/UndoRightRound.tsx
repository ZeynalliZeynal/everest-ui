import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoRightRound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 7H9a5 5 0 1 0 0 10h7m4-10-3-3m3 3-3 3"
    />
  </svg>
);
export default SvgUndoRightRound;
