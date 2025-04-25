import * as React from "react";
import type { SVGProps } from "react";
const SvgUsersGroupRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={9} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 9a3 3 0 1 0 0-6"
    />
    <ellipse cx={9} cy={17} stroke="#000" strokeWidth={1.5} rx={7} ry={4} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"
    />
  </svg>
);
export default SvgUsersGroupRounded;
