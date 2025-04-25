import * as React from "react";
import type { SVGProps } from "react";
const SvgTraffic1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12A10 10 0 1 1 12 2M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185"
    />
  </svg>
);
export default SvgTraffic1;
