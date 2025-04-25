import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={3} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.95 13c-.501 5.054-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.448 9-9.95"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12V2.456a10.02 10.02 0 0 1 6.542 6.542"
    />
  </svg>
);
export default SvgVinyl;
