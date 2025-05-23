import * as React from "react";
import type { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.67 18.67 2.22-1.11v-2.78m-6.67-5L12 10.89zM12 10.89 9.78 9.78zm0 0v2.78zm8.89-4.45-2.22 1.11zm0 0-2.22-1.11zm0 0v2.78zm-6.67-3.33L12 2 9.78 3.11zM3.11 6.44l2.22-1.11zm0 0 2.22 1.11zm0 0v2.78zM12 22l-2.22-1.11zm0 0 2.22-1.11zm0 0v-2.78zm-6.67-3.33-2.22-1.11v-2.78z"
    />
  </svg>
);
export default SvgBox;
