import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(-90 12 12)"
    />
    <circle
      cx={10}
      cy={20}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(-90 10 20)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(0 -1 -1 0 16 6)"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 12h3M14 20h5M10 4H5M5 12h3M5 20h1M19 4h-1"
    />
  </svg>
);
export default SvgTuning4;
