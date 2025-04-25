import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.75 8a.75.75 0 0 0-1.5 0v2.25H8a.75.75 0 0 0 0 1.5h2.25V14a.75.75 0 0 0 1.5 0v-2.25H14a.75.75 0 0 0 0-1.5h-2.25z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 1.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S16.385 1.25 11 1.25M2.75 11a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M19.359 18.298a.75.75 0 0 0-1.06 1.06l3.999 4a.75.75 0 0 0 1.06-1.06z"
    />
  </svg>
);
export default SvgZoomIn;
