import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.172 18.828a4 4 0 1 0 5.657-5.657m-5.658 5.657a4 4 0 0 1 5.657-5.657m-5.656 5.657 5.656-5.656"
    />
  </svg>
);
export default SvgUserBlock;
