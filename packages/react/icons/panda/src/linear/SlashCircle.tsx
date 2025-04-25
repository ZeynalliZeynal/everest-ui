import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.294 7.17 12 12l-1.294 4.83"
    />
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgSlashCircle;
