import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDownMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6H3M11 16H3M12 11H3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
    />
  </svg>
);
export default SvgListArrowDownMinimalistic;
