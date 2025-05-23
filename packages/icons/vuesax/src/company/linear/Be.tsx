import * as React from "react";
import type { SVGProps } from "react";
const SvgBe = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 12h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c1.7 0 3 1.3 3 3s-1.3 3-3 3z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14 14h8c0-2.2-1.8-4-4-4s-4 1.8-4 4m0 0c0 2.2 1.8 4 4 4h1.7M19.5 7.5h-3"
    />
  </svg>
);
export default SvgBe;
