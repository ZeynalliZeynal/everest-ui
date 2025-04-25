import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 15-7 7m0 0h5.857M2 22v-5.857M15 9l7-7m0 0h-5.857M22 2v5.857"
    />
  </svg>
);
export default SvgMaximize;
