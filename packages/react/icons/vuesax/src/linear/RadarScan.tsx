import * as React from "react";
import type { SVGProps } from "react";
const SvgRadarScan = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"
    />
  </svg>
);
export default SvgRadarScan;
