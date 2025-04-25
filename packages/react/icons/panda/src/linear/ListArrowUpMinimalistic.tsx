import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowUpMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M20 6H3M11 11H3M12 16H3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"
    />
  </svg>
);
export default SvgListArrowUpMinimalistic;
