import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.2 11.8-1.41 1.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l2.22-2.22a4.01 4.01 0 0 0 0-5.66 4.01 4.01 0 0 0-5.66 0l-2.42 2.42a3.43 3.43 0 0 0 0 4.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
  </svg>
);
export default SvgAttachCircle;
