import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22M22 9c0-3.87-3.13-7-7-7l1.05 1.75"
    />
  </svg>
);
export default SvgRotateLeft;
