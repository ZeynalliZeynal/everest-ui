import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 17v-6" />
    <circle cx={1} cy={1} r={1} fill="#000" transform="matrix(1 0 0 -1 11 9)" />
  </svg>
);
export default SvgInfoCircle;
