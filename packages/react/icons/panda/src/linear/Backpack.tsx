import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.421.076A6 6 0 0 1 21 10.911v5.464a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.375z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.5 15.5V17M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.16 22.16 0 0 0 18 0M10 13h4"
    />
  </svg>
);
export default SvgBackpack;
