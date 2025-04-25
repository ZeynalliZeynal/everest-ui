import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={11.5} cy={11.5} r={9.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 18.5 22 22"
    />
  </svg>
);
export default SvgMagnifer;
