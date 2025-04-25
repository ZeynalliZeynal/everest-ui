import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 13.499c1.105 0 2.022.906 1.779 1.983a8.999 8.999 0 0 1-17.606-.227A9 9 0 0 1 9.016 4.72C10.094 4.477 11 5.394 11 6.5v2a5 5 0 0 0 5 5z"
    />
    <path
      fill="currentColor"
      d="M14 5.033c0-1.952 1.64-3.596 3.444-2.85a9 9 0 0 1 4.87 4.872c.748 1.803-.896 3.444-2.848 3.444H18.5a4.5 4.5 0 0 1-4.5-4.5z"
    />
  </svg>
);
export default SvgGraph;
