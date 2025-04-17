import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketExpired = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.902 19.87h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31 0-1.28 1.03-2.32 2.31-2.32V9.7c0-3.7-.92-4.62-4.62-4.62h-6.38v6.79"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.994 16.87v3h-2.77c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45A2.35 2.35 0 0 0 6.024 13a2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2L7.974 4l3.02 7.32v2.55M8.162 19.87h-.17"
    />
  </svg>
);
export default SvgTicketExpired;
