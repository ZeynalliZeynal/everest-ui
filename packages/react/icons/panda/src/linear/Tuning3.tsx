import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(180 12 12)"
    />
    <circle
      cx={20}
      cy={14}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(180 20 14)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 6 8)"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 8V5M20 10V5M4 14v5M12 19v-3M20 19v-1M4 5v1"
    />
  </svg>
);
export default SvgTuning3;
