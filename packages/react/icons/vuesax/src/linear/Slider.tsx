import * as React from "react";
import type { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4M5 16.01h14M2 4v16M22 4v16"
    />
  </svg>
);
export default SvgSlider;
