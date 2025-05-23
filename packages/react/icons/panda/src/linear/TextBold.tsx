import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5zM5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z"
    />
  </svg>
);
export default SvgTextBold;
