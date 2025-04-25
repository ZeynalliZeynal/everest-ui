import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 18 18 6m0 0H9m9 0v9"
    />
  </svg>
);
export default SvgArrowRightUp;
