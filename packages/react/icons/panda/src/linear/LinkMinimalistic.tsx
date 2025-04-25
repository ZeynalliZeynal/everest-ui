import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 12h6M9 18H8A6 6 0 0 1 8 6h1M15 6h1a6 6 0 0 1 0 12h-1"
    />
  </svg>
);
export default SvgLinkMinimalistic;
