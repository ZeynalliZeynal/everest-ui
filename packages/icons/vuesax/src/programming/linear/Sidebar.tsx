import * as React from "react";
import type { SVGProps } from "react";
const SvgSidebar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7M22 8.5H2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.56 15.5 12 12.94 9.44 15.5"
    />
  </svg>
);
export default SvgSidebar;
