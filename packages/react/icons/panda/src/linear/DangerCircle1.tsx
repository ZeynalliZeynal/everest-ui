import * as React from "react";
import type { SVGProps } from "react";
const SvgDangerCircle1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 7v6" />
    <circle cx={12} cy={16} r={1} fill="#000" />
  </svg>
);
export default SvgDangerCircle1;
