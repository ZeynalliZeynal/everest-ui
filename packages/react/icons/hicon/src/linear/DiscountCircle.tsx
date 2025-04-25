import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscountCircle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m9 15 5.657-5.657M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      fill="currentColor"
      d="M8 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
);
export default SvgDiscountCircle;
