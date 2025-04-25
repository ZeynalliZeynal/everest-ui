import * as React from "react";
import type { SVGProps } from "react";
const SvgScreencast = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 20c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C2 7.803 2 8.036 2 8.5"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 20a9 9 0 0 0-9-9"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 20a6 6 0 0 0-6-6M5 20a3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgScreencast;
