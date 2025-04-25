import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgPaletteRound;
