import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftUp = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 18 6 6m0 0h9M6 6v9"
    />
  </svg>
);
export default SvgArrowLeftUp;
