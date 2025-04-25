import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareBottomUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 22c4.055-.008 6.179-.107 7.536-1.465C22 19.072 22 16.714 22 12s0-7.071-1.464-8.536C19.07 2 16.714 2 12 2S4.929 2 3.465 3.464C2.107 4.822 2.008 6.944 2 11"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 21 8-8m0 0H5m6 0v6"
    />
  </svg>
);
export default SvgSquareBottomUp;
