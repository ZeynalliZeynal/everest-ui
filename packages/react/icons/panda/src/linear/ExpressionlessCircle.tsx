import * as React from "react";
import type { SVGProps } from "react";
const SvgExpressionlessCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M9 16h6" />
    <path
      fill="#000"
      d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5"
    />
    <ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
  </svg>
);
export default SvgExpressionlessCircle;
