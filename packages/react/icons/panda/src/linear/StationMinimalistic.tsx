import * as React from "react";
import type { SVGProps } from "react";
const SvgStationMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913m-8.035-1.963A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 22-4-12-4 12"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.5 17.5h-5"
    />
  </svg>
);
export default SvgStationMinimalistic;
