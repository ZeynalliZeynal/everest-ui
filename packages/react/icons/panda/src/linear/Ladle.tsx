import * as React from "react";
import type { SVGProps } from "react";
const SvgLadle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 5.684a3.684 3.684 0 0 1 7.368 0v10a6.316 6.316 0 0 0 12.632 0V14.5"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5Z"
    />
  </svg>
);
export default SvgLadle;
