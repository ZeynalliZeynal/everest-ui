import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.15 12.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06"
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
export default SvgMouse;
