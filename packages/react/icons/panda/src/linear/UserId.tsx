import * as React from "react";
import type { SVGProps } from "react";
const SvgUserId = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={9} cy={9} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 12h-4M19 9h-5M19 15h-3"
    />
  </svg>
);
export default SvgUserId;
