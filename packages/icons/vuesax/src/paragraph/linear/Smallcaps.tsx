import * as React from "react";
import type { SVGProps } from "react";
const SvgSmallcaps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.99 5.93V4.42c0-1.02.83-1.85 1.85-1.85h12.92c1.02 0 1.85.83 1.85 1.85v1.51M10.3 18.1V3.32M6.9 18.1h5.58M13.68 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8M16.08 21.43V10.87M13.94 21.43h4.28"
    />
  </svg>
);
export default SvgSmallcaps;
