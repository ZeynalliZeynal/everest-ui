import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 15.552A9.215 9.215 0 0 1 11.21 22 9.21 9.21 0 0 1 2 12.79 9.215 9.215 0 0 1 8.448 4"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"
    />
  </svg>
);
export default SvgPieChart;
