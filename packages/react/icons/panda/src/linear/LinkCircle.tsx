import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 12a6 6 0 1 1-6-6"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 12a6 6 0 1 1 6 6"
    />
  </svg>
);
export default SvgLinkCircle;
