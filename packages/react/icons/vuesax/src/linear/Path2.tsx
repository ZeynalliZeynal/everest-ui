import * as React from "react";
import type { SVGProps } from "react";
const SvgPath2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#path-2_svg__a)"
    >
      <path d="M9.87 22h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.2l-.69 3.08C7.2 20.76 8.34 22 9.87 22M15.83 16.35l2.94-2.61c1.64-1.46 1.71-2.48.41-4.13l-5.19-6.58c-1.09-1.38-2.87-1.38-3.97 0L4.84 9.61c-1.3 1.65-1.3 2.72.41 4.13l2.94 2.61M12.01 2.67v4.3" />
    </g>
    <defs>
      <clipPath id="path-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPath2;
