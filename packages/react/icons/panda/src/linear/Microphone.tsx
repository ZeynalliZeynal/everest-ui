import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 8h4M13 11h4M20 10v1a8 8 0 1 1-16 0v-1M12 19v3"
    />
  </svg>
);
export default SvgMicrophone;
