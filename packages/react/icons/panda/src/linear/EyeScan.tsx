import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeScan = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94Z"
    />
    <circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgEyeScan;
