import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarTick = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8 2v3M16 2v3M3.5 9.09h17M22 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 23c-1.01 0-1.93-.37-2.63-1-.31-.26-.58-.58-.79-.94A3.9 3.9 0 0 1 14 19c0-2.21 1.79-4 4-4 1.2 0 2.27.53 3 1.36A4 4 0 0 1 22 19"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.44 19 .99.99 2.13-1.97"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.996 13.7h.008M8.294 13.7h.01M8.294 16.7h.01"
    />
  </svg>
);
export default SvgCalendarTick;
