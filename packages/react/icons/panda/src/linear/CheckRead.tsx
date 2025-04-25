import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckRead = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 12.9 3.143 3.6L15 7.5M20 7.563l-8.571 9L11 16"
    />
  </svg>
);
export default SvgCheckRead;
