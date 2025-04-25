import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6.142 6.142C8.904 3.381 10.284 2 12 2s3.096 1.38 5.858 4.142S22 10.284 22 12s-1.38 3.096-4.142 5.858S13.716 22 12 22s-3.096-1.38-5.858-4.142S2 13.716 2 12s1.38-3.096 4.142-5.858Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 11.5 13.333 9M16 11.5 13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"
    />
  </svg>
);
export default SvgRoute;
