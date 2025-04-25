import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"
    />
    <path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"
    />
    <path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"
    />
    <path
      stroke="#000"
      strokeDasharray="2 2"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"
    />
  </svg>
);
export default SvgBlackHole2;
