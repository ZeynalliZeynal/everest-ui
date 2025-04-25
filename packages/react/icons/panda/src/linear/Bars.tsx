import * as React from "react";
import type { SVGProps } from "react";
const SvgBars = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 10H5M19 14H5M19 6H5M19 18H5"
    />
  </svg>
);
export default SvgBars;
