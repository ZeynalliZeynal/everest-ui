import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
  </svg>
);
export default SvgFilterSquare;
