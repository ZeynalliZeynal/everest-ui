import * as React from "react";
import type { SVGProps } from "react";
const SvgWiFiRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M7 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 11 3 4M17 11l4-7M14 15h4M17.167 5.397A5.502 5.502 0 0 0 7 5.397"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"
    />
    <path fill="#000" d="M13.084 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgWiFiRouter;
