import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.53 17.47a.75.75 0 1 0-1.06 1.06l4 4a.75.75 0 1 0 1.06-1.06z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18M8 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgZoomOut;
