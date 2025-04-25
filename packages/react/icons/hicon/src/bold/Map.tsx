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
      fill="currentColor"
      d="M8.25 3.299a5.74 5.74 0 0 0-2.7 1.1l-2.2 1.65a2.75 2.75 0 0 0-1.1 2.2v8.63c0 2.213 2.526 3.476 4.297 2.148a4.1 4.1 0 0 1 1.703-.748zM9.75 18.279a4.1 4.1 0 0 1 1.703.748l.097.073a5.74 5.74 0 0 0 2.7 1.1V5.222a4.1 4.1 0 0 1-1.703-.749L12.45 4.4a5.74 5.74 0 0 0-2.7-1.101zM15.75 5.221v14.98a5.74 5.74 0 0 0 2.7-1.101l2.2-1.65a2.75 2.75 0 0 0 1.1-2.2V6.62c0-2.212-2.526-3.475-4.297-2.148-.515.387-1.1.637-1.703.749"
    />
  </svg>
);
export default SvgMap;
