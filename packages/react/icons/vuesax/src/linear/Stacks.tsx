import * as React from "react";
import type { SVGProps } from "react";
const SvgStacks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.5 10.5h9M9 6.5l2.8 4M14.8 6.5l-2.8 4M7.5 13.5h9M9 17.5l2.8-4M14.8 17.5l-2.8-4"
    />
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgStacks;
