import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaaylistMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 6H3M10 16H3M10 11H3"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"
    />
  </svg>
);
export default SvgPlaaylistMinimalistic;
