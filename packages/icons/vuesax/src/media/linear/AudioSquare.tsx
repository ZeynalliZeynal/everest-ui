import * as React from "react";
import type { SVGProps } from "react";
const SvgAudioSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.62 17.3a2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 0 0 0 4.24M11.74 15.18V7.77M13.13 6.77l2.34.78c.57.19 1.03.83 1.03 1.43v.62c0 .81-.63 1.26-1.39 1l-2.34-.78c-.57-.19-1.03-.83-1.03-1.43v-.62c0-.8.62-1.26 1.39-1"
    />
  </svg>
);
export default SvgAudioSquare;
