import * as React from "react";
import type { SVGProps } from "react";
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPauseCircle;
