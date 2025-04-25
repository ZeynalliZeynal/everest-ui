import * as React from "react";
import type { SVGProps } from "react";
const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 22h8M5 19h14M2 16h20"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6v6m0 0 2-2m-2 2-2-2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 5.322l-.393-.393"
    />
  </svg>
);
export default SvgSunset;
