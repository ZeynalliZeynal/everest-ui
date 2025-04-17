import * as React from "react";
import type { SVGProps } from "react";
const SvgTimerPause = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 2h6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 17v4M16 17v4"
    />
  </svg>
);
export default SvgTimerPause;
