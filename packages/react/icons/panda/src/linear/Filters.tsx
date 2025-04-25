import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6.5 10.189a6 6 0 1 0 7.106 3.669"
    />
    <path stroke="#000" strokeWidth={1.5} d="M12 20.472a6 6 0 1 0 5.5-10.283" />
  </svg>
);
export default SvgFilters;
