import * as React from "react";
import type { SVGProps } from "react";
const SvgCropMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 5h3c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v3M2 5h3m14 14v3"
    />
  </svg>
);
export default SvgCropMinimalistic;
