import * as React from "react";
import type { SVGProps } from "react";
const SvgEuro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5M5 13.5h5"
    />
  </svg>
);
export default SvgEuro;
