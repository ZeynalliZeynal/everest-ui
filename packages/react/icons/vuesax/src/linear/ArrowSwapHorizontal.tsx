import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSwapHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m20.5 14.99-5.01 5.02M3.5 14.99h17M3.5 9.01l5.01-5.02M20.5 9.01h-17"
    />
  </svg>
);
export default SvgArrowSwapHorizontal;
