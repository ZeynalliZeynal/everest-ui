import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculatorMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"
    />
  </svg>
);
export default SvgCalculatorMinimalistic;
