import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={14.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 21.996v-3.948c0-1.775-1.605-3.129-3.373-2.844m-7.679-1.77-.025-.024c-1.042-1.006-.237-2.625.67-3.268s4.752-1.642 4.752 3.292C13.345 18.13 9.695 22 5 22"
    />
  </svg>
);
export default SvgStretchingRound;
