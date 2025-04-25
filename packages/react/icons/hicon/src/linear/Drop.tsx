import * as React from "react";
import type { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 13.397C4 10.53 6.91 6.25 9.22 3.305 10.423 1.768 11.026 1 12 1s1.576.768 2.78 2.305C17.09 6.25 20 10.53 20 13.397c0 4.754-3.582 8.609-8 8.609s-8-3.855-8-8.61Z"
    />
  </svg>
);
export default SvgDrop;
