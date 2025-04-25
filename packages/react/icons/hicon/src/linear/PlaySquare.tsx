import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaySquare = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M13.421 9.28c1.45.892 2.176 1.338 2.42 1.921a2.08 2.08 0 0 1 0 1.598c-.244.583-.97 1.029-2.42 1.922s-2.176 1.34-2.771 1.272a1.82 1.82 0 0 1-1.298-.798C9 14.679 9 13.785 9 12c0-1.786 0-2.679.352-3.195.307-.45.778-.74 1.298-.798.595-.067 1.32.38 2.771 1.272Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M3 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 6.375 21 8.251 21 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12Z"
    />
  </svg>
);
export default SvgPlaySquare;
