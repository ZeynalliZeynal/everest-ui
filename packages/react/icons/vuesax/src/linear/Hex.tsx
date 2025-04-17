import * as React from "react";
import type { SVGProps } from "react";
const SvgHex = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 3.3H7L2 12l5 8.7h10l5-8.7z"
    />
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.9 14H7l-1.9 3.3L7 20.7h3.9l1.9-3.4z"
    />
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.3 8H7l-3.6 6.3L7 20.7h7.3l3.7-6.4z"
    />
  </svg>
);
export default SvgHex;
