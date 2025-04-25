import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 6 12 12m0 0V9m0 9H9"
    />
  </svg>
);
export default SvgArrowRightDown;
