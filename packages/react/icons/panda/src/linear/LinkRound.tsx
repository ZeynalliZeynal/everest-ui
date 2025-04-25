import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkRound = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10"
    />
  </svg>
);
export default SvgLinkRound;
