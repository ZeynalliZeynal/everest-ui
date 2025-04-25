import * as React from "react";
import type { SVGProps } from "react";
const SvgSun1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#Sun_1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 1v2m0 18v2m11-11h-2M3 12H1m18.778-7.778-1.414 1.414M5.636 18.364l-1.414 1.414m15.556 0-1.414-1.414M5.636 5.636 4.222 4.222M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      />
    </g>
    <defs>
      <clipPath id="Sun_1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSun1;
