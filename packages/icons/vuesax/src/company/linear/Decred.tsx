import * as React from "react";
import type { SVGProps } from "react";
const SvgDecred = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.7 7.7 2 4h5l6 6H8.5C6.6 10 5 11.6 5 13.5S6.6 17 8.5 17H10l3 3H8.5C4.9 20 2 17.1 2 13.5 2 11 3.4 8.8 5.5 7.7z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.3 16.3 22 20h-5l-6-6h4.5c1.9 0 3.5-1.6 3.5-3.5S17.4 7 15.5 7H14l-3-3h4.5c3.6 0 6.5 2.9 6.5 6.5 0 2.5-1.4 4.7-3.5 5.8z"
    />
  </svg>
);
export default SvgDecred;
