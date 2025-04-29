import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M18.667 11C20.55 10.721 22 9.046 22 7.02 22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02 2 9.046 3.449 10.721 5.333 11"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6v7m0 0 2-2.333M12 13l-2-2.333"
    />
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 17h14"
    />
  </svg>
);
export default SvgCashOut;
