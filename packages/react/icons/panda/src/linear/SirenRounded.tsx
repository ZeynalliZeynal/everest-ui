import * as React from "react";
import type { SVGProps } from "react";
const SvgSirenRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeWidth={1.5} d="M20 22v-6a8 8 0 1 0-16 0v6" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.29 11.5a4.01 4.01 0 0 1 2.21 2.21M2 22h20M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 19v3" />
  </svg>
);
export default SvgSirenRounded;
