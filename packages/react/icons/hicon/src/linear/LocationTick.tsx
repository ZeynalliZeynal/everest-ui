import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 8-2.021 2.509C12.177 11.503 11.777 12 11.25 12s-.927-.497-1.729-1.491L9 9.862m11-.253c0 2.867-2.91 7.146-5.22 10.092-1.204 1.536-1.807 2.305-2.78 2.305s-1.576-.769-2.78-2.305C6.91 16.755 4 12.476 4 9.609 4 4.854 7.582 1 12 1s8 3.854 8 8.609Z"
    />
  </svg>
);
export default SvgLocationTick;
