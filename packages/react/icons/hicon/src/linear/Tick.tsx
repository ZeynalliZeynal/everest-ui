import * as React from "react";
import type { SVGProps } from "react";
const SvgTick = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m20 7-5.39 6.469c-2.137 2.563-3.205 3.845-4.61 3.845s-2.473-1.282-4.61-3.845L4 11.8"
    />
  </svg>
);
export default SvgTick;
