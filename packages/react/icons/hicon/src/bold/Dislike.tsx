import * as React from "react";
import type { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m9.345 16.185 2.23 3.625a1.45 1.45 0 0 0 2.668-.98L14 17.25A2.82 2.82 0 0 1 16.788 14h.69c2.537 0 4.187-2.67 3.052-4.939l-1.148-2.297A5 5 0 0 0 14.91 4H12c-1.348 0-2.54.667-3.265 1.688q.015.155.015.312v8c0 .331-.05.65-.141.951.177.326.413.71.736 1.234M7.25 6a1.75 1.75 0 1 0-3.5 0v8a1.75 1.75 0 1 0 3.5 0z"
    />
  </svg>
);
export default SvgDislike;
