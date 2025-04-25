import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.633 14.522.949-3.542a3.667 3.667 0 0 0-7.084-1.898l-2.372 8.854a3.667 3.667 0 0 0 6.404 3.243m-.49-11.148-.949 3.542a3.667 3.667 0 0 0 7.083 1.898l2.373-8.854a3.667 3.667 0 0 0-6.404-3.243"
    />
  </svg>
);
export default SvgAttachment;
