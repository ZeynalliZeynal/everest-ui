import * as React from "react";
import type { SVGProps } from "react";
const SvgReel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22h10" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
    />
  </svg>
);
export default SvgReel;
