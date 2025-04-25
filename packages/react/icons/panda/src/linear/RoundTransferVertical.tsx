import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 7v10l-3-3.437M14 17V7l3 3.438"
    />
  </svg>
);
export default SvgRoundTransferVertical;
