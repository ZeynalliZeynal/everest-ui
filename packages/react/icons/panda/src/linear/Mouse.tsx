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
      stroke="#000"
      strokeWidth={1.5}
      d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 2v5" />
  </svg>
);
export default SvgMouse;
