import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowToDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 19.5 5-5m-5 5-5-5m5 5v-10c0-1.667-1-5-5-5"
    />
  </svg>
);
export default SvgArrowToDownLeft;
