import * as React from "react";
import type { SVGProps } from "react";
const SvgBackward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67M12.24 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67"
    />
  </svg>
);
export default SvgBackward;
