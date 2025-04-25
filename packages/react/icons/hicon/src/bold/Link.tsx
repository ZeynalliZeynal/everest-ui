import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 6.25a5.75 5.75 0 1 0 0 11.5.75.75 0 0 0 0-1.5 4.25 4.25 0 0 1 0-8.5.75.75 0 0 0 0-1.5M16 6.25a.75.75 0 0 0 0 1.5 4.25 4.25 0 0 1 0 8.5.75.75 0 0 0 0 1.5 5.75 5.75 0 0 0 0-11.5"
    />
    <path
      fill="currentColor"
      d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgLink;
