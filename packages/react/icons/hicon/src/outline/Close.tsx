import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.53 5.53a.75.75 0 0 0-1.06-1.06L12 10.94 5.53 4.47a.75.75 0 0 0-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 1 0 1.06 1.06L12 13.06l6.47 6.47a.75.75 0 1 0 1.06-1.06L13.06 12z"
    />
  </svg>
);
export default SvgClose;
