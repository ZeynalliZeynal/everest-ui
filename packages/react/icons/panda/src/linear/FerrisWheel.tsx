import * as React from "react";
import type { SVGProps } from "react";
const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={11} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M20.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5.5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.5 13 5 9M10.5 13l-5 9"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"
    />
  </svg>
);
export default SvgFerrisWheel;
