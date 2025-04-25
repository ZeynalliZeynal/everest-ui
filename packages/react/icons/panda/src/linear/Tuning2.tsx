import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 16.959h7M9 6.959H2M2 16.959h2M22 6.959h-2"
    />
  </svg>
);
export default SvgTuning2;
