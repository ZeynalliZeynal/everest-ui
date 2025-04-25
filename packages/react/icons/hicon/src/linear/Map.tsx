import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 4a5 5 0 0 0-3 1L3.8 6.65a2 2 0 0 0-.8 1.6v8.629c0 1.595 1.82 2.505 3.097 1.548A4.83 4.83 0 0 1 9 17.46M9 4c1.056 0 2.111.333 3 1l.097.073c.86.645 1.882.967 2.903.967M9 4v13.46m6-11.42a4.83 4.83 0 0 0 2.903-.967C19.18 4.116 21 5.026 21 6.62v8.629a2 2 0 0 1-.8 1.6L18 18.5c-.889.667-1.944 1-3 1m0-13.46V19.5m0 0a5 5 0 0 1-3-1l-.097-.073A4.83 4.83 0 0 0 9 17.46"
    />
  </svg>
);
export default SvgMap;
