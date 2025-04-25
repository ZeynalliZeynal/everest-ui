import * as React from "react";
import type { SVGProps } from "react";
const SvgShockAbsorber = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 4c0-.943 0-1.414.293-1.707S7.057 2 8 2h8c.943 0 1.414 0 1.707.293S18 3.057 18 4s0 1.414-.293 1.707S16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293S6 4.943 6 4Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M8.5 16.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5ZM14 15.5v-10M10 15.5V6"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8 8 8 2m-8 1.5 8 2M20 11.5h2m-18 0H2m17.071 2.8.707.7m-14.85-.7-.706.7m14.85-6.3.706-.7m-14.85.7L4.223 8"
    />
  </svg>
);
export default SvgShockAbsorber;
