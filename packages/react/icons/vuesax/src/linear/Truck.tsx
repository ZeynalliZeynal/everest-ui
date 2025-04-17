import * as React from "react";
import type { SVGProps } from "react";
const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 2v10c0 1.1-.9 2-2 2H2V6c0-2.21 1.79-4 4-4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29z"
    />
  </svg>
);
export default SvgTruck;
