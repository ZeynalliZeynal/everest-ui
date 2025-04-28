import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
    <path stroke="#1C274C" strokeLinecap="round" strokeWidth={1.5} d="M7 8v8" />
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16 10 1-1M11 15l1-1M12 10l-1-1M17 15l-1-1"
    />
  </svg>
);
export default SvgSafeCircle;
