import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentionChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.9 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3 16 4 17 5.9 17M2 2h20M8 22l4-2v-3M16 22l-4-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.5 11 3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8"
    />
  </svg>
);
export default SvgPresentionChart;
