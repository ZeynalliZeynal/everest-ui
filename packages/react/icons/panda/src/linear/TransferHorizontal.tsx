import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 10H4l5.5-6M4 14h16l-5.5 6"
    />
  </svg>
);
export default SvgTransferHorizontal;
