import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 2h17v12l-5 5h-5l-2 3h-3v-3h-4V5z"
      clipRule="evenodd"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11 7H9v6h2zM16 7h-2v6h2z"
    />
  </svg>
);
export default SvgTwitch;
