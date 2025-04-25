import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.959 9V2M6.959 15v7M16.959 22v-2M6.959 2v2"
    />
  </svg>
);
export default SvgTuning;
