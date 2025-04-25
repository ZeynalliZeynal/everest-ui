import * as React from "react";
import type { SVGProps } from "react";
const SvgBicycling = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={15} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <circle cx={6} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <circle cx={18} cy={18} r={3} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.226-.983-.657-1.85-1.517l-.576-.574c-.785-.78-1.178-1.17-1.642-1.128-.465.043-.78.497-1.411 1.406L7.388 9.727c-.642.926-.963 1.389-.835 1.843.13.455.646.68 1.678 1.13l1.476.645c1.364.595 2.046.893 2.374 1.492.328.6.21 1.335-.024 2.805L12 18"
    />
  </svg>
);
export default SvgBicycling;
