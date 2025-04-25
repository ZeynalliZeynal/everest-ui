import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12zM12 8.667H8.667a3.333 3.333 0 1 0 0 6.666H12z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0ZM8.667 15.333H12v3.334a3.333 3.333 0 1 1-3.333-3.334Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"
    />
  </svg>
);
export default SvgFigma;
