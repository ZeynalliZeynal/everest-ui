import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.955 5.061C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06m6.454 4.53a.75.75 0 1 0-1.06 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L12 13.304l1.591 1.59a.75.75 0 1 0 1.06-1.06l-1.59-1.591 1.59-1.591a.75.75 0 0 0-1.06-1.061L12 11.182z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseSquare;
