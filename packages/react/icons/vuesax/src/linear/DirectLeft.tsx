import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectLeft = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m4.71 9.17 11.59-6.1c2.75-1.45 5.74 1.48 4.35 4.26l-1.62 3.24c-.45.9-.45 1.96 0 2.86l1.62 3.24c1.39 2.78-1.6 5.7-4.35 4.26l-11.59-6.1c-2.28-1.2-2.28-4.46 0-5.66"
    />
  </svg>
);
export default SvgDirectLeft;
