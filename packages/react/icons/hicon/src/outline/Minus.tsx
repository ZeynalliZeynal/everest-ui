import * as React from "react";
import type { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgMinus;
