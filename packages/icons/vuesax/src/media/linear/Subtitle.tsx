import * as React from "react";
import type { SVGProps } from "react";
const SvgSubtitle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7M17.5 17.08h-1.85M12.97 17.08H6.5M17.5 13.32h-5.53M9.27 13.32H6.5"
    />
  </svg>
);
export default SvgSubtitle;
