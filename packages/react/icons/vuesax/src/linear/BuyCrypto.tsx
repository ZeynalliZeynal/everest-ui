import * as React from "react";
import type { SVGProps } from "react";
const SvgBuyCrypto = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.51 6.51 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.62 14.62 8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5z"
    />
  </svg>
);
export default SvgBuyCrypto;
