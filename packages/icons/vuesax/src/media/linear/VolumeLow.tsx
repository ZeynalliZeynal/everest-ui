import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeLow = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 9.96v4.08q0 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06Q2 6.9 2 9.96Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 12h4"
    />
  </svg>
);
export default SvgVolumeLow;
