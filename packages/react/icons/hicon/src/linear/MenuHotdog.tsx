import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuHotdog = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M9 18h6M5 12h14M9 6h6"
    />
  </svg>
);
export default SvgMenuHotdog;
