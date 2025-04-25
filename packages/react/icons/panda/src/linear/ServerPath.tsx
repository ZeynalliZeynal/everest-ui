import * as React from "react";
import type { SVGProps } from "react";
const SvgServerPath = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 19h-8M2 19h8M12 17v-3"
    />
    <circle cx={12} cy={19} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3ZM2 5a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 5h6M13 11h6"
    />
    <circle cx={6} cy={5} r={1} fill="#000" />
    <circle cx={6} cy={11} r={1} fill="#000" />
  </svg>
);
export default SvgServerPath;
